import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const guestSessionSchema = new mongoose.Schema({
  
  topic: String,
  date: String,
  class: { type: ObjectId, ref: 'Class' }
});

const GuestSession = mongoose.models.GuestSession || mongoose.model('GuestSession', guestSessionSchema);

export default GuestSession;
