const express = require("express");
const nodemailer = require("nodemailer");
const NewsRoute = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "utkarshagnihotri7@gmail.com",
    pass: "hozx htmc jnjf ztmc",
  },
});

const sendMailToUser = async (email) => {
  try {
    // Mail options
    let mailOptions = {
      from: "utkarshagnihotri7@gmail.com",
      to: email,
      subject: "NewsLetter",
      html: ` <div style="background-color: #f0f0f0; padding: 20px; border-radius: 10px; text-align: center;">
            <h2 style="margin-bottom: 10px;">Your NewsLetter</h2>
        
            <h2>You are now subscribed</h2>
   
  
        </div>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Route to send email
NewsRoute.post("/send-mail", async (req, res) => {
  try {
    const { email } = req.body;

    await sendMailToUser(email);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = { NewsRoute };
