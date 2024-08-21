import { connect } from '../../lib/db';
import userModel from '../../models/User';
import mongoose from 'mongoose';

await connect();

async function findUserById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return userModel.findById(id);
}


async function updateUserById(id, updates) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return userModel.findByIdAndUpdate(id, updates, { new: true });
}


async function deleteUserById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return userModel.findByIdAndDelete(id);
}

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const user = await findUserById(id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
        break;

      case 'PUT':
        const updates = req.body;
        const updatedUser = await updateUserById(id, updates);
        if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
        break;

      case 'DELETE':
        const deletedUser = await deleteUserById(id);
        if (!deletedUser) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.status(204).end(); 
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
