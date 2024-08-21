import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const curriculumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modules: [{ type: ObjectId, ref: 'Module' }]

});

export default mongoose.models.Curriculum || mongoose.model('Curriculum', curriculumSchema);
