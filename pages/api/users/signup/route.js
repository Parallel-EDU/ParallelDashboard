import { connect } from '../../../lib/db';
import User from '../../../models/User';
import bcryptjs from 'bcrypt';
import jwt from "jsonwebtoken";
import cookie from "cookie";


export default async function handler(req, res) {
  try {
    await connect();
    
    if (req.method !== 'POST') {
      return res.status(405).json({ success: false, error: 'Invalid request method' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    console.log("Request body", req.body);

    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ success: false, error: 'User already exists' });
    }
     
    console.log("after user exist");
    const salt = await bcryptjs.genSalt(10);
    console.log(salt);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("after hash password");

    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    console.log("after new user object");

    const savedUser = await newUser.save();

    console.log('User created:', savedUser);

    return res.status(201).json({
      message: 'User created successfully',
      success: true,
      data: savedUser,
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
