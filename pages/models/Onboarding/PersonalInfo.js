import mongoose from 'mongoose';

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, 
{ timestamps: true });

export default mongoose.models.PersonalInfo || mongoose.model('PersonalInfo', personalInfoSchema);
