import { connect } from '../../../lib/db';
import Curriculum from '../../../models/platform/Curriculum';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const curriculums = await Curriculum.find({}).populate('modules');
        res.status(200).json({ success: true, data: curriculums });
      } catch (error) {
        console.error('Error fetching curriculums:', error);
        res.status(400).json({ success: false, message: 'Error fetching curriculums' });
      }
      break;

    case 'POST':
      try {
        const { modules, title, description } = req.body;
        if (!modules || !title || !description) {
          return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const curriculum = await Curriculum.create(req.body);
        res.status(201).json({ success: true, data: curriculum });
      } catch (error) {
        console.error('Error creating curriculum:', error);
        res.status(400).json({ success: false, message: 'Error creating curriculum' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
