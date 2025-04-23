"use strict";
// forgot-pw.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRecoveryEmail = sendRecoveryEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const Ienv_1 = __importDefault(require("../Ienv")); // Make sure file name matches
// SMTP transport setup
const transporter = nodemailer_1.default.createTransport({
    host: Ienv_1.default.SMTP_HOST,
    port: Number(Ienv_1.default.SMTP_PORT),
    secure: true,
    auth: {
        user: Ienv_1.default.SMTP_USERNAME,
        pass: Ienv_1.default.SMTP_PASSWORD,
    },
    logger: true, // Enable Nodemailer logging
});
// Function to send the recovery email
function sendRecoveryEmail(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("user email is", userEmail);
        const token = (100000 + Math.floor(Math.random() * 900000)).toString();
        const info = yield transporter.sendMail({
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
    });
}
