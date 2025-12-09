export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    // Use nodemailer if environment variables are present
    // Otherwise simulate success (or return error if strict)
    // For this implementation, we try to send real email if config exists.

    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        // If no env vars, we can't send real email.
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.warn('Missing EMAIL_USER or EMAIL_PASS environment variables.');
            // In development/preview without keys, we might want to return success to show UI works
            // But for production, this should fail or be configured.
            // Returning 200 for now to allow UI testing without crashing, but logging error.
            return res.status(200).json({ message: 'Simulation: Email "sent" (Configure Env Vars for real sending)' });
        }

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: 'info@frigo-term.com, gworkgw@gmail.com', // Primary and fallback as requested
            subject: `New Contact Form: ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
      `,
            html: `
<h3>New Contact Message</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<hr/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
