import { connect } from '../../../lib/db';
import Academics from '../../../models/Onboarding/Academics';

async function findAllAcademics() {
  console.log("Find all academics");
  return Academics.find({});
}

async function createAcademics(academicsData) {
  const newAcademics = new Academics(academicsData);
  await newAcademics.save();
  return newAcademics;
}

export default async function handler(req, res) {
  await connect();

  try {
    switch (req.method) {
      case 'GET':
        console.log("GET request for academics");
        const academics = await findAllAcademics();
        res.status(200).json(academics);
        break;

      case 'POST':
        console.log("POST request for academics");
        const newAcademics = req.body;
        const createdAcademics = await createAcademics(newAcademics);
        res.status(201).json(createdAcademics);
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
