import courseInfo from "../../models/admin/courseInfo";
import { connect } from "../../lib/db";

export default async function Announcements(req, res) {
  const { method } = req;
  await connect();
  switch (method) {
    case "GET":
      try {
        const courses = await courseInfo.find({});
        res.status(200).json(courses);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const courses = await courseInfo.create(req.body);
        res.status(201).json(courses);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
