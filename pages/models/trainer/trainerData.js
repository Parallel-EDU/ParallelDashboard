import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const TrainerSchema = new Schema({
  trainerId: { type: String },
  course: { type: String },
  email: { type: String },
  password: { type: String },
  name: { type: String }, 
  phoneNumber: { type: String },
  personalEmail: { type: String },
  dob: { type: String },
  state: { type: String },
  city: { type: String },
  zipCode: { type: String },
  address: { type: String },
  panNumber: { type: String },
  panPhoto: { type: String },
  passPhoto: { type: String },
  aadharNumber: { type: String },
  aadharPhoto: { type: String },
  sscPhoto: { type: String },
  exprienceLetter: { type: String },
  github: { type: String },
  linkedin: { type: String },
});

export default mongoose.models.TrainerData || mongoose.model("TrainerData", TrainerSchema);
