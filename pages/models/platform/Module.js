import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const moduleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String, required: false },  
  class: { type: ObjectId, ref: 'Class', required: true }
});

export default mongoose.models.Module || mongoose.model('Module', moduleSchema);
