import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const AnnouncementsGraduates = new Schema({
  heading: { type: String },
  message: { type: String },
  link: { type: String },
});

export default mongoose.models.announcementsGraduates ||
  mongoose.model("announcementsGraduates", AnnouncementsGraduates);
