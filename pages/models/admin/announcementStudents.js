import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const StudentsAnnouncement = new Schema({
  heading: { type: String },
  message: { type: String },
  link: { type: String },
  batchId: { type: String },
});

export default mongoose.models.studentsAnnouncement ||
  mongoose.model("studentsAnnouncement", StudentsAnnouncement);
