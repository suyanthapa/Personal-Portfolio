"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailer_1 = require("../services/mailer");
// Controller function to handle email sending (OTP)
const email = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Destructure only the fields you need
        const { email } = req.body;
        // Call the function to send the recovery email
        const { token, info } = yield (0, mailer_1.sendRecoveryEmail)(email);
        return res.status(200).json({
            details: [
                {
                    message: 'OTP Sent Successfully',
                    token, // You might want to return the token as part of the response (for example, for verification)
                },
            ],
        });
    }
    catch (e) {
        console.error('Register error:', e);
        // Improved error handling, making sure e is an instance of Error
        if (e instanceof Error) {
            return res.status(500).json({ message: e.message });
        }
        else {
            return res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});
// Exporting the controller
const portfolioController = {
    email,
};
exports.default = portfolioController;
