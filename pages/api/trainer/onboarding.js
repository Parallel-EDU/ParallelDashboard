import TrainerData from "../../models/trainer/trainerData"; // Adjust the import path as needed
import { connect } from "../../lib/db";

export default async function handler(req, res) {
  try {
    await connect();
    if (req.method === "POST") {
      const { email, ...updatedData } = req.body;
      const { password, ...dataWithoutPassword } = updatedData;

      try {
        const updatedTrainer = await TrainerData.findOneAndUpdate(
          { email },
          { $set: dataWithoutPassword },
          { new: true }
        );
        res.status(200).json(updatedTrainer);
      } catch (error) {
        res.status(500).json({ message: "Error updating trainer data", error });
      }
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
