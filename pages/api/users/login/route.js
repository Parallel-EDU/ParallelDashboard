"use client";

import { connect } from '../../../lib/db';
import User from '../../../models/User';
import bcryptjs from 'bcrypt';
import jwt from "jsonwebtoken";
import cookie from 'cookie';

export default async function handler(req, res) {
    try {
        await connect();

        const { email, password } = req.body;
        console.log(req.body);

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User does not exist" });
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const tokenData = {
            id: user._id,
            email: user.email
        };
        
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });
        console.log("generated token", token);

        // Set token in cookies
        res.setHeader('Set-Cookie', cookie.serialize('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development', 
            maxAge: 60 * 60 * 24, // 1 day
            sameSite: 'strict',
            path: '/',
        }));

        // Send response
        return res.json({
            message: "Login successful",
            success: true,
            tokendata: token,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
