import { connect } from "../../lib/db";
import Batch from "../../models/trainer/batchData";

export default async function handler(req, res) {
  const { method } = req;

  await connect();

  switch (method) {
    case "GET":
      try {
        const batches = await Batch.find({});
        res.status(200).json(batches);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const batch = await Batch.create(req.body);
        res.status(201).json(batch);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
