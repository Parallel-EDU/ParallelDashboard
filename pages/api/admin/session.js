import { connect } from "../../lib/db";
import Session from "../../models/admin/session";

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case "GET":
      try {
        const session = await Session.find({});
        res.status(200).json(session);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const session = await Session.create(req.body);
        res.status(201).json(session);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "DELETE":
      try {
        const session = await Session.findByIdAndDelete(req.body);
        if (session) {
          return res
            .status(200)
            .json({ message: "Session deleted successfully" });
        } else {
          return res.status(404).json({ message: "Session not found" });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error", error });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
