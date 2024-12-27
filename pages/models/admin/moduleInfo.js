 import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const moduleInfo = new Schema({
  courseName: { type: String },
  moduleName: { type: String },
  lesson1Name: { type: String },
  lesson1Description: { type: String },
  lesson2Name: { type: String },
  lesson2Description: { type: String },
  lesson3Name: { type: String },
  lesson3Description: { type: String },
  lesson4Name: { type: String },
  lesson4Description: { type: String },
});

export default mongoose.models.ModuleInfo ||
  mongoose.model("ModuleInfo", moduleInfo);
