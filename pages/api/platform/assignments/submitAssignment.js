import { connect } from "../../../lib/db";
import Class from "../../../models/platform/Class";
import Assignment from "../../../models/platform/Assignment";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case "GET":
      try {
        const classObj = await Assignment.find({});
        if (!classObj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: classObj });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { id, ...assignmentData } = req.body;

        console.log("Assignment data:", assignmentData);

        if (typeof assignmentData !== "object" || assignmentData === null) {
          throw new Error("Invalid assignment data format");
        }

        res.status(201).json({ success: true });
      } catch (error) {
        console.error("Error creating assignment:", error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: "Invalid request method" });
      break;
  }
}
