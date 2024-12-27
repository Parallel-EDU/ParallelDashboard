import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const courseInfo = new Schema({
  courseName: { type: String },
  headInstructor: { type: String },
  whatsappGroupLink: { type: String },
});

export default mongoose.models.CourseInfo || mongoose.model("CourseInfo", courseInfo);
