import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { parse } from 'json2csv';
import { fileURLToPath } from 'url';
import { sendEmail } from './mailer.js'; // Ajusta la ruta

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
const CSV_PATH = path.join(__dirname, '..', 'uploads', 'data.csv');

// --- Multer setup ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  
  filename: (req, file, cb) => {
    const originalName = Buffer.from(file.originalname, 'latin1').toString('utf8'); 
    // separar el .pdf del nombre
    const ext = path.extname(originalName); 
    const nameWithoutExt = path.basename(originalName, ext);
    
    const cleanName = nameWithoutExt
      .replace(/\s+/g, '-')             // Reemplaza espacios por guiones
      .replace(/[^a-zA-Z0-9.\-_]/g, ''); // Elimina caracteres especiales

    cb(null, `${cleanName}-${Date.now()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'cv' && !file.originalname.match(/\.(pdf|doc|docx)$/)) {
      return cb(new Error('Only PDF and DOC files are allowed for CV!'), false);
    }
    cb(null, true);
  }
}).fields([
  { name: 'cv', maxCount: 1 },
  { name: 'coverLetter', maxCount: 1 }
]);

// --- Helper: append to CSV ---
export const appendToCSV = (data) => {
    const fields = [
      'timestamp',
      'name',
      'email',
      'center',
      'city',
      'subject',
      'message',
      'cvPath',
      'coverLetterPath'
    ];
  
    // Siempre genera CSV completo de los datos enviados
    const csvData = parse(data, { fields, header: !fs.existsSync(CSV_PATH) }) + '\n';
  
    try {
      fs.appendFileSync(CSV_PATH, csvData, 'utf8');
      console.log('CSV updated successfully!');
    } catch (err) {
      console.error('Error writing CSV:', err);
    }
  };

// --- POST /contact ---
router.post('/contact', upload, async (req, res) => {
    try {
      const { name, email, center, city, subject, message } = req.body;
      const cvFile = req.files?.cv?.[0] || null;
      const lettreFile = req.files?.coverLetter?.[0] || null;
  
      const cvPath = cvFile ? cvFile.filename : 'N/A';
      const lettrePath = lettreFile ? lettreFile.filename : 'N/A';

      const getReadableName = (file) => {
      const ext = path.extname(file.filename); 
      const nameWithoutExt = path.basename(file.filename, ext); 
      const parts = nameWithoutExt.split('-');
      if (parts.length > 1) {
             parts.pop(); 
             return parts.join('-') + ext; 

      } 
      return file.filename;
      };
      const cvNameForCSV = getReadableName(cvFile);
      const lettreNameForCSV = getReadableName(lettreFile);
  
      // Guardar en CSV
      const submissionData = [{
        timestamp: new Date().toISOString(),
        name: name || 'N/A',
        email: email || 'N/A',
        center: center || 'N/A',
        city: city || 'N/A',
        subject: subject || 'N/A',
        message: message ? message.replace(/(\r\n|\n|\r)/gm, ' ') : 'N/A',

        cvPath: cvNameForCSV,           
        coverLetterPath: lettreNameForCSV
        
      }];
  
      appendToCSV(submissionData);
  
      // Enviar email (ya lo tienes funcionando)
      const attachments = [];
      if (cvFile) attachments.push({ filename: cvFile.originalname, path: cvFile.path });
      if (lettreFile) attachments.push({ filename: lettreFile.originalname, path: lettreFile.path });
  
      await sendEmail({
        subject: `New contact form submission: ${subject || 'No subject'}`,
        text: `
          Name: ${name}
          Email: ${email}
          Center: ${center}
          City: ${city}
          Message: ${message}
        `,
        attachments,
        replyTo: email
      });
  
      res.status(200).json({
        success: true,
        message: 'Submission successful! Email sent and CSV updated.',
        files: { cv: cvPath, coverLetter: lettrePath }
      });
  
    } catch (error) {
      console.error('Error processing submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
  });

export default router;