import {connect} from '../../../lib/db';
import Class from '../../../models/platform/Class';
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
        const classObj = await Class.find({}).populate('supportSections');
        if (!classObj) {
          return res.status(404).json({ success: false, error: 'Class not found' });
        }
        res.status(200).json({ success: true, data: classObj });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    
    case 'POST':
      try {
        let supportSection;
        if (method === 'POST') {
          supportSection = await SupportSection.create({ ...req.body, class: id });
          await Class.findByIdAndUpdate(id, { supportSection: supportSection._id });
        } else {
          supportSection = await SupportSection.findOneAndUpdate(
            { class: id },
            req.body,
            { new: true, upsert: true }
          );
        }
        res.status(201).json({ success: true, data: supportSection });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}