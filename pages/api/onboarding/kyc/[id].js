"use client"
import { connect } from '../../../lib/db';
import Kyc from '../../../models/Onboarding/Kyc';
import mongoose from 'mongoose';

await connect();

async function findKycById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Kyc.findById(id);
}

async function updateKycById(id, updates) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Kyc.findByIdAndUpdate(id, updates, { new: true });
}

async function deleteKycById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error('Invalid ID');
  }
  return Kyc.findByIdAndDelete(id);
}

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const kycRecord = await findKycById(id);
        if (!kycRecord) {
          return res.status(404).json({ message: 'KYC record not found' });
        }
        res.status(200).json(kycRecord);
        break;

      case 'PUT':
        const updates = req.body;
        const updatedKyc = await updateKycById(id, updates);
        if (!updatedKyc) {
          return res.status(404).json({ message: 'KYC record not found' });
        }
        res.status(200).json(updatedKyc);
        break;

      case 'DELETE':
        const deletedKyc = await deleteKycById(id);
        if (!deletedKyc) {
          return res.status(404).json({ message: 'KYC record not found' });
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
