import { verify } from 'jsonwebtoken';
import { parse } from 'cookie';

export default async function handler(req, res) {
  try {
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.token;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    verify(token, process.env.TOKEN_SECRET);
    res.status(200).json({ message: 'Authenticated' });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized', error: error.message });
  }
}
