import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const kycSchema = new Schema({
  userId: { type: ObjectId, ref: 'User'},
  panNumber: { type: String, required: true },
  panPhoto: { type: String },
  passportPhoto: { type: String }
});

export default mongoose.models.Kyc || mongoose.model('Kyc', kycSchema);
