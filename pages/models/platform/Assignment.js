import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const assignmentSchema = new Schema({
  _id: { type: ObjectId, auto: true },
  title: { type: String },
  description: { type: String},
  submitAssignment : {type: String},
  dateAssign: {type: String},
  dateSubmitted :{type: String},
  date: { type: Date},
  //date : {type:Date},
  class: { type: ObjectId, ref: 'Class'},
  userId : {type: ObjectId, ref:'User'}
});

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
