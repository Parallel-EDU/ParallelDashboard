import { connect } from '../../../lib/db';
import Curriculum from '../../../models/platform/Curriculum';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const curriculum = await Curriculum.findById(id).populate('modules');
        if (!curriculum) {
          return res.status(404).json({ success: false, error: 'Curriculum not found' });
        }
        res.status(200).json({ success: true, data: curriculum });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'PUT':
      try {
        const curriculum = await Curriculum.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!curriculum) {
          return res.status(404).json({ success: false, error: 'Curriculum not found' });
        }
        res.status(200).json({ success: true, data: curriculum });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    case 'DELETE':
      try {
        const deletedCurriculum = await Curriculum.deleteOne({ _id: id });
        if (!deletedCurriculum) {
          return res.status(404).json({ success: false, error: 'Curriculum not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
