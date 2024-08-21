import {connect} from '../../../lib/dbConnect';
import SupportSection from '../../../models/platform/SupportSection';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const supportSection = await SupportSection.findById(id);
        if (!supportSection) {
          return res.status(404).json({ success: false, error: 'Support section not found' });
        }
        res.status(200).json({ success: true, data: supportSection });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const supportSection = await SupportSection.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!supportSection) {
          return res.status(404).json({ success: false, error: 'Support section not found' });
        }
        res.status(200).json({ success: true, data: supportSection });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedSupportSection = await SupportSection.deleteOne({ _id: id });
        if (!deletedSupportSection) {
          return res.status(404).json({ success: false, error: 'Support section not found' });
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