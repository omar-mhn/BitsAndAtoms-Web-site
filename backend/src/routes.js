import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { parse } from 'json2csv';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const CSV_PATH = path.join(__dirname,'uploads/data.csv');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '..', 'uploads');
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir,{recursive:true});
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
// File filter to accept only specific file types
const upload = multer({ storage: storage ,
    limits: {fileSize:5 * 1024 * 1024}, // 5MB limit
       fileFilter:(req,file,cb)=>{
        if(file.fieldname === 'cv' && !file.originalname.match(/\.(pdf|doc|docx)$/)){
            return cb(new Error('Only PDF and DOC files are allowed for CV!'),false);
        }
        cb(null,true);
    }
    
 }).fields([ 
    { name: 'cv', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 } // Allow coverLetter uploads as well
]);
// Nodemailer setup for sending emails
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS,// Your email password or app password
        },
    });
    // Function to append a submission to the CSV
    const appendToCSV = (data) => {
        const fields = ['timestamp','name', 'email', 'center','city','subject', 'message', 'cvPath', 'coverLetterPath'];
        const opts = { fields, header: !fs.existsSync(CSV_PATH) };

        const csvData = parse(data, opts) + '\n';

        const dataToWrite = fs.existsSync(CSV_PATH) && fs.statSync(CSV_PATH).size > 0
        ?csvData.split('\n').slice(1).join('\n') : csvData;
        fs.appendFileSync(CSV_PATH, dataToWrite);
    };
    // --- POST Route for submission ---
    router.post('/contact',upload, async(req, res) => {
    // Retrieve form data
        const {name, email, center, city, subject, message} = req.body;
        // Determine file paths
        const cvFile =req.files && req.files['cv'] ? req.files['cv'][0] : null;
        const lettreFile = req.files && req.files['coverLetter'] ? req.files['coverLetter'][0] : null;

        const cvPath = cvFile ? cvFile.filename : 'N/A';
        const lettrePath = lettreFile ? lettreFile.filename : 'N/A';

        // Save to the CSV file
        const submissionData = [{
            timestamp: new Date().toISOString(),
            name,
            email,
            center,
            city,
            subject,
            message: message.replace(/(\r\n|\n|\r)/gm, ' '), // Clean up the message for CSV
            cv_path : cvPath,
            coverLetterPath: lettrePath,
        }];

        try {
            appendToCSV(submissionData);

            // Send confirmation email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'crisomar226@gmail.com',
                subject: 'New Submission: ' + subject,
                html: `
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Subject:</b> ${subject}</p>
                <p><b>Message:</b> ${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><b>CV:</b> ${cvFile ? 'Attached (See uploads directory)' : 'N/A'}</p>
                <p><b>Letter:</b> ${lettreFile ? 'Attached (See uploads directory)' : 'N/A'}</p>
                <p>The complete data and file paths are in <code>/backend/src/data.csv</code>.</p>
            `,
            };
            await transporter.sendMail(mailOptions);
            //Respond to the client
            res.status(200).json({ success : true,
                 message: 'Submission successful!' });

        } catch (error) {
            console.error('Error processing submission:', error);
            res.status(500).json({ success:false,
                 message: 'An error occurred while processing your submission.' });
        }
    });
    export default router;