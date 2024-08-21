import {connect} from '../../../lib/dbConnect';
import Assignment from '../../../models/Assignment';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const assignment = await Assignment.findById(id);
        if (!assignment) {
          return res.status(404).json({ success: false, error: 'Assignment not found' });
        }
        res.status(200).json({ success: true, data: assignment });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const assignment = await Assignment.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!assignment) {
          return res.status(404).json({ success: false, error: 'Assignment not found' });
        }
        res.status(200).json({ success: true, data: assignment });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedAssignment = await Assignment.deleteOne({ _id: id });
        if (!deletedAssignment) {
          return res.status(404).json({ success: false, error: 'Assignment not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}