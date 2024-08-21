import {connect} from '../../../lib/db';
import Module from '../../../models/platform/Module';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const module = await Module.findById(id);
        if (!module) {
          return res.status(404).json({ success: false, error: 'Module not found' });
        }
        res.status(200).json({ success: true, data: module });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const module = await Module.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!module) {
          return res.status(404).json({ success: false, error: 'Module not found' });
        }
        res.status(200).json({ success: true, data: module });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedModule = await Module.deleteOne({ _id: id });
        if (!deletedModule) {
          return res.status(404).json({ success: false, error: 'Module not found' });
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