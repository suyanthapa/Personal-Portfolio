import { Request, Response } from 'express';
import { sendRecoveryEmail } from '../services/mailer';

// Controller function to handle email sending (OTP)
const email = async (req: Request, res: Response):Promise<any> => {
  try {
    // Destructure only the fields you need
    const { email } = req.body;

    // Call the function to send the recovery email
    const { token, info } = await sendRecoveryEmail(email);

    return res.status(200).json({
      details: [
        {
          message: 'OTP Sent Successfully',
          token, // You might want to return the token as part of the response (for example, for verification)
        },
      ],
    });
  } catch (e: unknown) {
    console.error('Register error:', e);

    // Improved error handling, making sure e is an instance of Error
    if (e instanceof Error) {
      return res.status(500).json({ message: e.message });
    } else {
      return res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Exporting the controller
const portfolioController = {
  email,
};

export default portfolioController;
