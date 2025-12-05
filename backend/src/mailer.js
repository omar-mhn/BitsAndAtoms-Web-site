import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT == 465, // true si es 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendEmail = async ({ subject, text, attachments = [], replyTo }) => {
  const mailOptions = {
    from: `"Formulario Web" <${process.env.EMAIL_USER}>`, // remitente visible
    to: process.env.EMAIL_TO, // receptor
    replyTo, // correo del usuario del formulario
    subject,
    text,
    attachments
  };

  return transporter.sendMail(mailOptions);
};
