import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


const classSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  description: String,
  assignments: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' },

  schedules: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  modules: { type: mongoose.Schema.Types.ObjectId, ref: 'Module' },
  supportSections: { type: mongoose.Schema.Types.ObjectId, ref: 'SupportSection' },
  guestSessions: { type: mongoose.Schema.Types.ObjectId, ref: 'GuestSession' },
  videos: [{ type: ObjectId, ref: 'Video' }],

})


export default mongoose.models.Class || mongoose.model('Class', classSchema);
