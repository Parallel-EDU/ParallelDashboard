import {connect} from '../../../lib/db';
import Class from '../../../models/platform/Class';
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
        const classObj = await GuestSession.find({});
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
          console.log('Request body:', req.body); 
          const guestSession = await GuestSession.create({ ...req.body, class: id });
          console.log('Created guest session:', guestSession); 
      
          const updatedClass = await Class.findByIdAndUpdate(
            id,
            { $push: { guestSessions: guestSession._id } },
            { new: true }
          );
          console.log('Updated class:', updatedClass); 
      
          res.status(201).json({ success: true, data: guestSession });
        } catch (error) {
          console.error('Error creating guest session:', error); // Log the full error
          res.status(400).json({ success: false, error: error.message });
        }
        break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}