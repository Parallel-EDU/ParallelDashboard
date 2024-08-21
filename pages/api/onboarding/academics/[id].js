import { connect } from '../../../lib/db';
import Academics from '../../../models/Onboarding/Academics';
import mongoose from 'mongoose';

await connect();

async function findAcademicsById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Academics.findById(id);
}

async function updateAcademicsById(id, updates) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Academics.findByIdAndUpdate(id, updates, { new: true });
}

async function deleteAcademicsById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Academics.findByIdAndDelete(id);
}

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const academics = await findAcademicsById(id);
        if (!academics) {
          return res.status(404).json({ message: 'Academics record not found' });
        }
        res.status(200).json(academics);
        break;

      case 'PUT':
        const updates = req.body;
        const updatedAcademics = await updateAcademicsById(id, updates);
        if (!updatedAcademics) {
          return res.status(404).json({ message: 'Academics record not found' });
        }
        res.status(200).json(updatedAcademics);
        break;

      case 'DELETE':
        const deletedAcademics = await deleteAcademicsById(id);
        if (!deletedAcademics) {
          return res.status(404).json({ message: 'Academics record not found' });
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
