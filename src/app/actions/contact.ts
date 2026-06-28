'use server'

import { createClient } from '@/lib/supabase/server'
import nodemailer from 'nodemailer'

export type ContactFormState = {
  success: boolean
  error: string | null
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  if (!firstName || !lastName || !email || !service || !message) {
    return {
      success: false,
      error: 'All fields are required.',
    }
  }

  try {
    const supabase = await createClient()

    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          service,
          message,
        },
      ])

    if (dbError) {
      console.error('Supabase Error:', dbError)

      return {
        success: false,
        error: 'Failed to save message to database.',
      }
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      const adminEmail = process.env.EMAIL_USER

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        subject: `New Contact Form Submission: ${service}`,
        html: `
          <div style="font-family:sans-serif">
            <h2>New message from ${firstName} ${lastName}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `,
      })

      await transporter.sendMail({
        from: `"Tajul Shahin" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We received your message!',
        html: `
          <div style="font-family:sans-serif">
            <h2>Hi ${firstName},</h2>
            <p>Thank you for contacting us.</p>
            <p>We received your message and will reply soon.</p>
          </div>
        `,
      })
    }

    return {
      success: true,
      error: null,
    }
  } catch (error) {
    console.error('Action Error:', error)

    return {
      success: false,
      error: 'An unexpected error occurred.',
    }
  }
}