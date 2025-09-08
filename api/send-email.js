const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, date, service } = req.body || {}

  if (!name || !email || !date || !service) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: email,
      subject: 'Samuel Ojo Mechanical Services - Appointment Confirmation',
      text: `Hello ${name},\n\nYour appointment for ${service} is scheduled on ${date}.\n\nThank you,\nSamuel Ojo Mechanical Services`,
      html: `<p>Hello <strong>${name}</strong>,</p><p>Your appointment for <strong>${service}</strong> is scheduled on <strong>${date}</strong>.</p><p>Thank you,<br/>Samuel Ojo Mechanical Services</p>`
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ message: 'Email sent' })
  } catch (err) {
    console.error('send-email error', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
