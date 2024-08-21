import {connect} from '../../../lib/db';
import Notification from '../../../models/platform/Notification';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const notifications = await Notification.find({});
        res.status(200).json({ success: true, data: notifications });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const notification = await Notification.create(req.body);
        res.status(201).json({ success: true, data: notification });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}