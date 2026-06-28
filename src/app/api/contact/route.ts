import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const firstName = formData.get('firstName')?.toString().trim() || '';
    const lastName = formData.get('lastName')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const service = formData.get('service')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      const supabase = await createClient();
      const { error: dbError } = await supabase.from('contact_messages').insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          service,
          message,
        },
      ]);

      if (dbError) {
        console.error('Supabase Error:', dbError);
        return NextResponse.json(
          { error: 'Failed to save message to database.' },
          { status: 500 }
        );
      }
    }

    if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      const adminEmail = process.env.EMAIL_USER;

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
      });

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
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
