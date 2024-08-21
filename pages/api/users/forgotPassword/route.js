"use client";

import User from '../../../models/User';
import ResetToken from '../../../models/resetTokenModel';
import { connect } from '../../../lib/db';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connect();

    const { email } = req.body;

    const user = await User.findOne({ email });
    console.log('after email find'); //->for debug puropose only

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1h" });
    console.log("generated token", token);

    // Create a new reset token document
    const resetToken = new ResetToken({
      userId: user._id,
      token: token,
      createdAt: Date.now()
    });

    await resetToken.save();    
    console.log("Reset token saved");

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "911861fe8e32ac",
        pass: "97f1bffc8f2a64"
      }
    });

    const mailOptions = {
      from: 'pranav.srivastava.1291@gmail.com',
      to: email,
      subject: 'Password Reset Link',
      text: `Use this link to reset your password. The link is only valid for 1 hour.

************
Hi,
************

You recently requested to reset your password for your account. Use the link below to reset it. This password reset is only valid for the next 1 hour.

Reset your password: http://localhost:3000/reset-password?token=${token}

For security, this request was received from a device. If you did not request a password reset, please ignore this email or contact support if you have questions.

Thanks,
The Team

If you're having trouble with the link above, copy and paste the URL below into your web browser.

http://localhost:3000/reset-password?token=${token}

Company Name, LLC
1234 Street Rd.
Suite 1234`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Reset link sent to email' });
      console.log("mail sent");
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }

  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ message: 'Forgot password failed' });
  }
}