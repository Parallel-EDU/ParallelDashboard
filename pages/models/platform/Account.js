import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String,
    required: true,
  },
  resume: {
    type: String, 
    default: null,
  },
  locationPreference: {
    type: String, 
    default: null,
  },
  courseOpted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    default: null,
  },
  paymentInfo: {
    method: {
      type: String, 
      default: null,
    },
    status: {
      type: String, 
      default: null,
    },
  },
});

const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);

export default Account;
