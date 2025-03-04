import nodemailer from 'nodemailer';
import express from 'express';
// import cron from 'node-cron';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your email password or app password
  }
});

// Function to send reminder email
const sendReminderEmail = (to, subject, message) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};


export default sendReminderEmail;

// API endpoint to send a reminder email
// app.post('/send-reminder', (req, res) => {
//   const { email, subject, message } = req.body;
//   if (!email || !subject || !message) {
//     return res.status(400).json({ error: 'All fields are required' });
//   }
//   sendReminderEmail(email, subject, message);
//   res.json({ success: 'Reminder email sent successfully' });
// });

// // Schedule daily email reminders at a specific time (e.g., 9 AM)
// cron.schedule('0 9 * * *', () => {
//   sendReminderEmail('user@example.com', 'Medication Reminder', 'Take your medicine on time!');
// }, {
//   timezone: 'Asia/Kolkata' // Adjust timezone as needed
// });
