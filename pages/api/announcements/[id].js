// import {connect} from "../../lib/db";
// import Batch from "../../models/trainer/batchData";

// export default async function handler(req, res) {
//   const { method } = req;
//   const { id } = req.query;

//   await connect();

//   switch (method) {
//     case "GET":
//       try {
//         const batch = await Batch.findById(id);
//         if (!batch) {
//           return res.status(404).json({ message: "Batch not found" });
//         }
//         res.status(200).json(batch);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//       break;
//     case "PUT":
//       try {
//         const updatedBatch = await Batch.findByIdAndUpdate(id, req.body, {
//           new: true,
//         });
//         if (!updatedBatch) {
//           return res.status(404).json({ message: "Batch not found" });
//         }
//         res.status(200).json(updatedBatch);
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//       break;
//     case "DELETE":
//       try {
//         const deletedBatch = await Batch.findByIdAndDelete(id);
//         if (!deletedBatch) {
//           return res.status(404).json({ message: "Batch not found" });
//         }
//         res.status(200).json({ message: "Batch deleted successfully" });
//       } catch (error) {
//         res.status(500).json({ message: error.message });
//       }
//       break;
//     default:
//       res.status(405).json({ message: `Method ${method} not allowed` });
//       break;
//   }
// }
