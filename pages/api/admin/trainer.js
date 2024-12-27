import TrainerData from "../../models/trainer/trainerData";
import { connect } from "../../lib/db";

export default async function handler(req, res) {
  try {
    await connect();
    if (req.method === "GET") {
      try {
        const trainer = await TrainerData.find();

        if (!trainer) {
          return res.status(404).json({ error: "Trainer not found" });
        }

        res.status(200).json(trainer);
      } catch (error) {
        res.status(500).json({ message: "Error fetching trainer data", error });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
