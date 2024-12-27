import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const batchSchema = new Schema({
  batchId: { type: String },
  course: { type: String },
  students: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  instructor1: { type: String },
  instructor2: { type: String },
  progress: { type: String },
  whatsapp: { type: String },
  github: { type: String },
});

export default mongoose.models.Batch || mongoose.model("Batch", batchSchema);
