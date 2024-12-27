import { connect } from "../../lib/db";
import announcements from "../../models/announcements/announcements";

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case "GET":
      try {
        const announcement = await announcements.find({});
        res.status(200).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const announcement = await announcements.create(req.body);
        res.status(201).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
