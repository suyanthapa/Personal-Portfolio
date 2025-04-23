// forgot-pw.ts


import nodemailer from "nodemailer";
import env from "../Ienv"; // Make sure file name matches


// SMTP transport setup
const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: true,
  auth: {
    user: env.SMTP_USERNAME,
    pass: env.SMTP_PASSWORD,
  },
  logger: true, // Enable Nodemailer logging
});

// Function to send the recovery email
export async function sendRecoveryEmail(userEmail: string,): Promise<{ token: string; info: any }> {
console.log("user email is" , userEmail)
  const token = (100000 + Math.floor(Math.random() * 900000)).toString();

  const info = await transporter.sendMail({
    from: userEmail,
    to: 'suyanthapa07@gmail.com',
    subject: "TOPICCCCCCC",
    text: "Hello, use the token to verify your email.",
    html: `<p>Dear User,</p>
           <p>Please use the following token to verify your email address:</p>
           <p><b style="font-size: 20px;">${token}</b></p>
           <p>For your security, do not share this email or verification token with anyone.</p>
           <p>Thank you,<br />The YaGOo Team</p>`,
  }).catch((error) => {
    console.log("Error sending email:", error);
    throw error;
  });
  

  console.log("Message sent: %s", info.messageId);
  return { token, info };
}
