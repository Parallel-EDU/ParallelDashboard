import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { email, password } = req.body;

  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (email === validEmail && password === validPassword) {
    const token = jwt.sign(
      { email, platform: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24,
        sameSite: 'strict',
        path: '/',
      })
    );;
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
}
