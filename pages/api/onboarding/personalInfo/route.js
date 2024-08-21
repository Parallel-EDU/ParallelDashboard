"use client"
import { connect } from '../../../lib/db';
import PersonalInfo from '../../../models/Onboarding/PersonalInfo';

async function findAllPersonalInfo() {
  console.log("Find all personal info records");
  return PersonalInfo.find({});
}

async function createPersonalInfo(personalInfoData) {
  const newPersonalInfo = new PersonalInfo(personalInfoData);
  await newPersonalInfo.save();
  return newPersonalInfo;
}

export default async function handler(req, res) {
  await connect();

  try {
    switch (req.method) {
      case 'GET':
        console.log("GET request for personal info records");
        const personalInfoRecords = await findAllPersonalInfo();
        res.status(200).json(personalInfoRecords);
        break;

      case 'POST':
        console.log("POST request for personal info records");
        const newPersonalInfo = req.body;
        const createdPersonalInfo = await createPersonalInfo(newPersonalInfo);
        res.status(201).json(createdPersonalInfo);
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
