const nodemailer = require('nodemailer');

const SMTP_HOST = 'mail.aqibmehedi.com';
const SMTP_PORT = 465;
const SMTP_USER = 'mr@aqibmehedi.com';
const SMTP_PASS = 'ACE@VICA.?9Tiv~V';

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
    // Adding extra debug logging
    debug: true,
    logger: true
});

console.log("Testing SMTP Connection...");

transporter.verify(function (error, success) {
    if (error) {
        console.error("❌ Connection failed:");
        console.error(error);
    } else {
        console.log("✅ Server is ready to take our messages");

        // Try sending a test email
        transporter.sendMail({
            from: `"SMTP Test" <${SMTP_USER}>`,
            to: 'aqibcareer007@gmail.com',
            subject: "Test from SMTP Script",
            text: "This is a direct test."
        }, (err, info) => {
            if (err) {
                console.error("❌ Failed to send:", err);
            } else {
                console.log("✅ Email sent:", info.response);
            }
            process.exit(0);
        });
    }
});
