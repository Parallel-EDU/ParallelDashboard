import {connect} from '../../../lib/db';
import Class from '../../../models/platform/Class';

export default async function handler(req, res) {
  const { method } = req;

  await connect();
  console.log("db connected");
  switch (method) {
    case 'GET':
      try {
        const classes = await Class.find({});
        res.status(200).json({ success: true, data: classes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const classObj = await Class.create(req.body);
        res.status(201).json({ success: true, data: classObj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}