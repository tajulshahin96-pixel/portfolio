'use server'

import { createClient } from '@/lib/supabase/server'
import nodemailer from 'nodemailer'

// Configure the Nodemailer transport using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  if (!firstName || !lastName || !email || !service || !message) {
    return { error: 'All fields are required.' }
  }

  try {
    const supabase = await createClient()

    // Insert into Supabase
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
      return { error: 'Failed to save message to database.' }
    }

    // Only send emails if Email credentials are set
    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      const adminEmail = process.env.EMAIL_USER // Send notification to yourself
      
      // 1. Send notification to Admin
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        subject: `New Contact Form Submission: ${service}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New message from ${firstName} ${lastName}</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `
      })

      // 2. Send receipt to Client
      await transporter.sendMail({
        from: `"Tajul Shahin" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We received your message!',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Hi ${firstName},</h2>
            <p>Thank you for reaching out regarding <strong>${service}</strong>.</p>
            <p>We have received your message and will get back to you shortly to discuss how we can help your business grow.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Tajul Shahin</strong></p>
          </div>
        `
      })
    } else {
      console.warn('EMAIL_USER or EMAIL_APP_PASSWORD is not set. Emails were not sent.')
    }

    return { success: true }
  } catch (error) {
    console.error('Action Error:', error)
    return { error: 'An unexpected error occurred.' }
  }
}
