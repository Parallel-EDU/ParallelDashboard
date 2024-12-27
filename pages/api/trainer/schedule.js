import { connect } from "../../lib/db";
import Schedule from "../../models/trainer/schedule";
import cron from 'node-cron';

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  cron.schedule('0 0 * * *', async () => {
    try {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
      const result = await Schedule.deleteMany({
        createdAt: { $lt: oneWeekAgo }
      });
  
      console.log(`Deleted ${result.deletedCount} old records.`);
    } catch (error) {
      console.error('Error deleting old records:', error);
    }
  });

  switch (method) {
    case "GET":
      try {
        const schedules = await Schedule.find({});
        res.status(200).json(schedules);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const schedules = await Schedule.create(req.body);
        res.status(201).json(schedules);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
