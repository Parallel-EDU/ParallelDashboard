import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  
  currentOccupation: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  
});

const Course = mongoose.models.courseSchema || mongoose.model('Course', courseSchema);

export default Course;
