import {connect} from '../../../lib/db';
import Account from '../../../models/platform/Account';

export default async function handler(req, res) {
  await connect();

  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const account = await Account.findOne({ userId: req.query.userId });
        if (!account) {
          return res.status(404).json({ success: false, message: 'Account not found' });
        }
        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { userId, resume, locationPreference, courseOpted, paymentInfo } = req.body;

        const account = await Account.findOneAndUpdate(
          { userId },
          { resume, locationPreference, courseOpted, paymentInfo },
          { new: true, upsert: true }
        );

        res.status(200).json({ success: true, data: account });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;


    case 'PUT':
        try {
            const { password } = req.body;
            const pass = await Account.findOneAndReplace(
                {password}
            );
            res.status(200).json({ success: true, data: pass });

        } catch (error) {
            res.status(500).json({ success: false, error: error.message });

        }
        break;

    case 'DELETE':
      try {
        const { userId } = req.body;
        await Account.findOneAndDelete({ userId });
        res.status(200).json({ success: true, message: 'Account deleted' });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
