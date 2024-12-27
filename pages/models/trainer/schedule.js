import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const Schedule = new Schema(
  {
    batchId: { type: String },
    sessionType: { type: String },
    sessionName: { type: String },
    startTime: { type: String },
    endTime: { type: String },
    day: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Schedule || mongoose.model("Schedule", Schedule);
