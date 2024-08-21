import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const scheduleSchema = new mongoose.Schema({
  _id: ObjectId,
  date: String,
  description: String,
  course: { type: ObjectId, ref: 'Course' },
  class: { type: ObjectId, ref: 'Class' }
});

export default mongoose.models.Schedule || mongoose.model('Schedule', scheduleSchema);
