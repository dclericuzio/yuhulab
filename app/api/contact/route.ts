import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; 

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: 'admin@ranaputrasolid.co.id',
      replyTo: email,
      subject: `Pesan dari ${name}`,
      html: `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Email send failed:', JSON.stringify(err, null, 2));
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
