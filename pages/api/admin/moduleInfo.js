import moduleInfo from "../../models/admin/moduleInfo";
import { connect } from "../../lib/db";

export default async function Announcements(req, res) {
  const { method } = req;
  await connect();
  switch (method) {
    case "GET":
      try {
        const modules = await moduleInfo.find({});
        res.status(200).json(modules);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const modules = await moduleInfo.create(req.body);
        res.status(201).json(modules);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
