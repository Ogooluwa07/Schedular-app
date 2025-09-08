# Scheduling App - Vercel Ready

This project is a Vite + React scheduling app for **Samuel Ojo Mechanical Services**.
It includes a serverless function (`/api/send-email`) that uses **nodemailer** to send a confirmation email.

## Setup locally

1. Copy the project and run:
```bash
npm install
npm run dev
```

2. To use email sending locally, set environment variables (create a `.env` file):
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
FROM_EMAIL="Samuel Ojo Mechanical <no-reply@example.com>"
SMTP_SECURE=false
```

## Deploy to Vercel

- Ensure the following Environment Variables are set in your Vercel project settings:
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL` (optional), and `SMTP_SECURE` (true/false).
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

The `vercel.json` is already included to force Node 18 for the serverless function runtime.
