import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const announcementSchema = new Schema({
  type: { type: String },
  heading: { type: String },
  course: { type: String },
  topic: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  message: { type: String },
  link: { type: String },
  batchId: { type: String },
});

export default mongoose.models.announcements || mongoose.model("announcements", announcementSchema);
