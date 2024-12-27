import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    dateOfBirth: { type: String },
    currentOccupation: { type: String },
    highestQualification: { type: String },
    branchOfDegree: { type: String },
    SID: { type: String },
    collegeName: { type: String },
    course: { type: String },
    currentLocation: { type: String },
    graduationYear: { type: String },
    linkedIn: { type: String },
    github: { type: String },
    website: { type: String },
    studentId: { type: String },
    batchId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.PersonalInfo ||
  mongoose.model("PersonalInfo", personalInfoSchema);
