"use client"
import { connect } from '../../../lib/db';
import PersonalInfo from '../../../models/Onboarding/PersonalInfo';
import mongoose from 'mongoose';

await connect();

async function findPersonalInfoById(id) {
    console.log("find perosnal id");
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return PersonalInfo.findById(id);
}

async function updatePersonalInfoById(id, updates) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return PersonalInfo.findByIdAndUpdate(id, updates, { new: true });
}

async function deletePersonalInfoById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return PersonalInfo.findByIdAndDelete(id);
}

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        console.log("GET test");
        const personalInfoRecord = await findPersonalInfoById(id);
        if (!personalInfoRecord) {
          return res.status(404).json({ message: 'Personal info record not found' });
        }
        res.status(200).json(personalInfoRecord);
        break;

      case 'PUT':
        const updates = req.body;
        const updatedPersonalInfo = await updatePersonalInfoById(id, updates);
        if (!updatedPersonalInfo) {
          return res.status(404).json({ message: 'Personal info record not found' });
        }
        res.status(200).json(updatedPersonalInfo);
        break;

      case 'DELETE':
        const deletedPersonalInfo = await deletePersonalInfoById(id);
        if (!deletedPersonalInfo) {
          return res.status(404).json({ message: 'Personal info record not found' });
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
