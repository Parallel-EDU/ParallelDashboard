import {connect} from '../../../lib/db';
import GuestSession from '../../../models/platform/GuestSession';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const guestSession = await GuestSession.findById(id);
        if (!guestSession) {
          return res.status(404).json({ success: false, error: 'Guest session not found' });
        }
        res.status(200).json({ success: true, data: guestSession });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const guestSession = await GuestSession.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!guestSession) {
          return res.status(404).json({ success: false, error: 'Guest session not found' });
        }
        res.status(200).json({ success: true, data: guestSession });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedGuestSession = await GuestSession.deleteOne({ _id: id });
        if (!deletedGuestSession) {
          return res.status(404).json({ success: false, error: 'Guest session not found' });
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