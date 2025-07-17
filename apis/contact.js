import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // e.g. mail.ranaputrasolid.co.id
    port: process.env.SMTP_PORT,       // e.g. 587 or 465
    secure: process.env.SMTP_SECURE === 'false', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,     // e.g. noreply@ranaputrasolid.co.id
      pass: process.env.SMTP_PASS,     // your email password or app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: 'marketing@ranaputrasolid.co.id',
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
