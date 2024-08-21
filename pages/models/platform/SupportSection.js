import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const supportSchema = new mongoose.Schema({
    _id: ObjectId,
    description: String,
    contactInfo: String,
    class: { type: ObjectId, ref: 'Class' }
  });

export default mongoose.models.supportSection || mongoose.model('SupportSection', supportSchema);
