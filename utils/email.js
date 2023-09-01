import nodemailer from 'nodemailer';
import {EMAIL_USERNAME, EMAIL_PASSWORD } from '../config.js'

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD
    }
});

export const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME, 
        to, 
        subject, 
        text, 
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending the email', error);
        throw error
    }
};
