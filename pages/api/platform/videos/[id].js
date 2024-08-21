import {connect} from '../../../lib/db';
import Video from '../../../models/platform/Video';

connect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const { id } = req.query;
        const video = await Video.findById(id);

        if (!video) {
          return res.status(404).json({ success: false, error: 'Video not found' });
        }

        res.status(200).json({ success: true, data: video });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
