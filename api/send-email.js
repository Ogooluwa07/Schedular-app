import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, date, service } = req.body;

  if (!name || !email || !date || !service) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.FROM_EMAIL, // send to yourself
      replyTo: email,
      subject: `New Appointment Booking - ${service}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    return res.status(200).json({ message: "Booking request sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ error: "Failed to send email. Check server logs." });
  }
}

