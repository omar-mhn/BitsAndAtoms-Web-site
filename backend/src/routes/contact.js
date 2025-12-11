/**
 * Contact Routes
 * Handles contact form submissions, CV uploads, and email notifications
 */

import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "../utils/mailer.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========================
// MULTER CONFIGURATION
// ========================
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "cv" && !file.originalname.match(/\.(pdf|doc|docx)$/)) {
      return cb(new Error("Solo se permiten PDF o DOC para el CV"), false);
    }
    cb(null, true);
  }
}).fields([
  { name: "cv", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 }
]);

// ========================
// POST /contact
// ========================
/**
 * Handle contact form submissions
 * - Uploads CV (required) and cover letter (optional)
 * - Sends data to Google Apps Script
 * - Sends email notification
 */
router.post("/", upload, async (req, res) => {
  try {
    const { name, email, center, city, subject, message } = req.body;

    const cvFile = req.files?.cv?.[0] || null;
    const coverLetterFile = req.files?.coverLetter?.[0] || null;

    // ========================
    // VALIDATION
    // ========================
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required."
      });
    }

    if (!cvFile) {
      return res.status(400).json({
        success: false,
        message: "CV (PDF) is required."
      });
    }

    // ========================
    // PREPARE PAYLOAD
    // ========================
    const fileToBase64 = (file) => file.buffer.toString("base64");

    const googlePayload = {
      name,
      email,
      center: center || "N/A",
      city: city || "N/A",
      subject: subject || "General Inquiry",
      message: message || "",
      files: {}
    };

    // Add CV (required)
    googlePayload.files.cv = {
      filename: cvFile.originalname,
      mimeType: cvFile.mimetype,
      base64: fileToBase64(cvFile)
    };

    // Add cover letter (optional)
    if (coverLetterFile) {
      googlePayload.files.coverLetter = {
        filename: coverLetterFile.originalname,
        mimeType: coverLetterFile.mimetype,
        base64: fileToBase64(coverLetterFile)
      };
    }

    // ========================
    // SEND TO GOOGLE APPS SCRIPT
    // ========================
    let gsResult = { success: false };
    
    if (process.env.APPS_SCRIPT_WEBAPP_URL) {
      try {
        const gsResponse = await fetch(process.env.APPS_SCRIPT_WEBAPP_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(googlePayload)
        });

        gsResult = await gsResponse.json();
        if (!gsResult.success) {
          console.error("Google Apps Script Error:", gsResult.error);
        }
      } catch (gsError) {
        console.error("Failed to send to Google Apps Script:", gsError.message);
      }
    }

    // ========================
    // SEND EMAIL NOTIFICATION
    // ========================
    const attachments = [
      {
        filename: cvFile.originalname,
        content: cvFile.buffer
      }
    ];

    if (coverLetterFile) {
      attachments.push({
        filename: coverLetterFile.originalname,
        content: coverLetterFile.buffer
      });
    }

    try {
      await sendEmail({
        subject: `New Submission: ${subject || "No Subject"}`,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Center: ${center || "Not provided"}
City: ${city || "Not provided"}
Subject: ${subject || "Not provided"}

Message:
${message || "No message provided"}
        `,
        attachments,
        replyTo: email
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError.message);
      // Continue even if email fails - the submission was still recorded
    }

    // ========================
    // RESPONSE
    // ========================
    return res.status(200).json({
      success: true,
      message: "Submission received successfully.",
      googleResult: gsResult
    });

  } catch (error) {
    console.error("Error processing submission:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;
