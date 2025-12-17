/**
 * Contact Form Email Handler (Vercel Serverless Function)
 * 
 * Uses Gmail SMTP to send contact form submissions.
 * 
 * Required Vercel Environment Variables:
 * - EMAIL_USER: Gmail address (e.g., daniil390@gmail.com)
 * - EMAIL_PASS: 16-character Gmail App Password (not regular password)
 * 
 * Generate App Password at: https://myaccount.google.com/apppasswords
 */

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // STRICT CHECK: Fail if Env Vars are missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('SERVER CONFIG ERROR: Missing EMAIL_USER or EMAIL_PASS');
        return res.status(500).json({
            message: 'Server configuration error: Email credentials missing. Please check Vercel Environment Variables.'
        });
    }

    const nodemailer = await import('nodemailer');

    // Gmail SMTP Configuration
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email configuration - always send FROM server email, never from visitor
    const toAddress = process.env.EMAIL_USER; // Can change to 'info@frigo-term.com' if Cloudflare routing is set up

    const mailOptions = {
        from: `"FRIGO-TERM website" <${process.env.EMAIL_USER}>`, // Fixed sender - always your Gmail
        to: toAddress, // Recipient - your Gmail
        replyTo: email, // Visitor's email - ONLY used for reply-to, NOT for sending
        subject: `New contact form message from website`,
        text: `
You have received a new message from the FRIGO-TERM contact form:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
        `,
        html: `
<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #2563EB;">New Contact Form Submission</h2>
    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    </div>
    <div style="border-top: 1px solid #eee; padding-top: 20px;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
    </div>
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
    <p style="font-size: 0.9em; color: #6B7280;">To reply, simply click reply in your email client. It will respond directly to ${email}.</p>
</div>
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);

        // Clear success log
        console.log(`✅ Contact form: from ${email} sent via ${process.env.EMAIL_USER} to ${toAddress}`);
        console.log(`📧 MessageId: ${info.messageId}`);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('❌ Nodemailer Send Error:', error);
        return res.status(500).json({
            message: 'Failed to send email. Please try again later.',
            error: error.message
        });
    }
}
