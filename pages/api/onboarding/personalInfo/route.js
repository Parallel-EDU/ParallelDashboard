import { connect } from "../../../lib/db";
import PersonalInfo from "../../../models/Onboarding/PersonalInfo";
import batchData from "../../../models/trainer/batchData";

await connect();
async function findGraduates() {
  const currentDate = new Date();
  const personalInfos = await PersonalInfo.find({ batchId: { $exists: true } });

  const graduateEmails = [];
  for (const personalInfo of personalInfos) {
    const batch = await batchData.findOne({ batchId: personalInfo.batchId });

    if (batch && batch.endDate) {
      const [day, month, year] = batch.endDate.split("/");
      const endDate = new Date(`20${year}`, month - 1, day);

      if (endDate < currentDate) {
        graduateEmails.push(personalInfo);
      }
    }
  }
  return graduateEmails;
}

async function findStudents() {
  const currentDate = new Date();
  const personalInfos = await PersonalInfo.find({ batchId: { $exists: true } });

  const graduateEmails = [];
  for (const personalInfo of personalInfos) {
    const batch = await batchData.findOne({ batchId: personalInfo.batchId });

    if (batch && batch.endDate) {
      const [day, month, year] = batch.endDate.split("/");
      const endDate = new Date(`20${year}`, month - 1, day);

      if (endDate > currentDate) {
        graduateEmails.push(personalInfo);
      }
    }
  }
  return graduateEmails;
}

async function createPersonalInfo(personalInfoData) {
  const newPersonalInfo = new PersonalInfo(personalInfoData);
  await newPersonalInfo.save();
  return newPersonalInfo;
}
let isProcessing = false;

export default async function handler(req, res) {
  const { state } = req.query;
  if (isProcessing) {
    return res.status(429).json({ message: "Request is already processing" });
  }

  isProcessing = true;

  try {
    switch (req.method) {
      case "GET":
        switch (state) {
          case "1":
            const studentsInfoRecords = await findStudents();
            res.status(200).json(studentsInfoRecords);
            break;
          case "2":
            const graduatesInfoRecords = await findGraduates();
            res.status(200).json(graduatesInfoRecords);
            break;
          default:
            const allInfoRecords = await PersonalInfo.find({});
            res.status(200).json(allInfoRecords);
            break;
        }
        break;
      case "POST":
        const newPersonalInfo = req.body;
        const createdPersonalInfo = await createPersonalInfo(newPersonalInfo);
        res.status(201).json(createdPersonalInfo);
        break;

      default:
        res.status(405).json({ message: "Method not allowed" });
        break;
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  } finally {
    isProcessing = false;
  }
}
