import { connect } from "../../../lib/db";
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
        const { date, title, description } = req.query;
        let assignments;

        if (date && title && description) {
          assignments = await Assignment.find({});

          if (!assignments || assignments.length === 0) {
            return res
              .status(404)
              .json({
                success: false,
                message: "No data available for the given date",
              });
          }
        } else {
          assignments = await Assignment.find({});
        }

        res.status(200).json({ success: true, data: assignments });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
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
