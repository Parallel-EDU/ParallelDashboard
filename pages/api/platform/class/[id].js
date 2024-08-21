import {connect} from '../../../lib/db';
import Class from '../../../models/Class';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const classObj = await Class.findById(id);
        if (!classObj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: classObj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT':
      try {
        const classObj = await Class.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!classObj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: classObj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const deletedClass = await Class.deleteOne({ _id: id });
        if (!deletedClass) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}