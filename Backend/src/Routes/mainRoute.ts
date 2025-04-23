import express from 'express';
import portfolioController from '../Controllers/portfolioController';

const portfolioRouter = express.Router();

// POST route to send OTP email
portfolioRouter.post('/sendEmail', portfolioController.email);

export default portfolioRouter;
