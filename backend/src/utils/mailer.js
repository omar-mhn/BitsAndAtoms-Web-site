/**
 * Email Service
 * Handles email sending with attachments
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// ========================
// TRANSPORTER SETUP
// ========================
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 465),
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter ready:', success);
  }
});

// ========================
// SEND EMAIL FUNCTION
// ========================
/**
 * Send email with attachments
 * @param {Object} options
 * @param {string} options.subject - Email subject
 * @param {string} options.text - Email body
 * @param {Array} options.attachments - File attachments
 * @param {string} options.replyTo - Reply-to address
 */
export const sendEmail = async ({ 
  subject, 
  text, 
  attachments = [], 
  replyTo,
  to = process.env.EMAIL_TO 
}) => {
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured');
  }

  const mailOptions = {
    from: `"Bits and Atoms Contact" <${process.env.EMAIL_USER}>`,
    to,
    replyTo,
    subject,
    text,
    attachments
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully. Message ID: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default { sendEmail };
