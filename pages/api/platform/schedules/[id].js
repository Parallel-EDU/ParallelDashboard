import {connect} from '../../../lib/db';
import Schedule from '../../../models/platform/Schedule';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
          return res.status(404).json({ success: false, error: 'Schedule not found' });
        }
        res.status(200).json({ success: true, data: schedule });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const schedule = await Schedule.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!schedule) {
          return res.status(404).json({ success: false, error: 'Schedule not found' });
        }
        res.status(200).json({ success: true, data: schedule });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedSchedule = await Schedule.deleteOne({ _id: id });
        if (!deletedSchedule) {
          return res.status(404).json({ success: false, error: 'Schedule not found' });
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