import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const sessions = new Schema({
  sessionType: { type: String },
  sessionName: { type: String },
  link: { type: String },
  startTime: { type: String },
  endTime: { type: String },
});

export default mongoose.models.Sessions || mongoose.model("Sessions", sessions);
