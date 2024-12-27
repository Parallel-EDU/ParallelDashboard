import { connect } from "../../../lib/db";
import PersonalInfo from "../../../models/Onboarding/PersonalInfo";
import mongoose from "mongoose";

await connect();

async function findPersonalInfoById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid ID");
  }
  return PersonalInfo.findById(id);
}

async function updatePersonalInfoByEmail(email, SID) {
  return PersonalInfo.findOneAndUpdate({ email }, { SID }, { new: true });
}

async function deletePersonalInfoByEmail(email) {
  return PersonalInfo.findOneAndDelete({ email });
}

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        const { id } = req.query;
        if (!id) {
          return res.status(400).json({ message: "Id is required" });
        }

        const personalInfoRecord = await findPersonalInfoById(id);
        if (!personalInfoRecord) {
          return res
            .status(404)
            .json({ message: "Personal info record not found" });
        }
        res.status(200).json(personalInfoRecord);
        break;
      }

      case "PUT": {
        const { email, SID } = req.body;
        if (!email) {
          return res.status(400).json({ message: "Email is required" });
        }
        console.log(email);
        console.log(SID);
        const updatedPersonalInfo = await updatePersonalInfoByEmail(email, SID);
        if (!updatedPersonalInfo) {
          return res
            .status(404)
            .json({ message: "Personal info record not found" });
        }
        console.log(updatedPersonalInfo);
        res.status(200).json(updatedPersonalInfo);
        break;
      }

      case "DELETE": {
        const { email } = req.body;
        if (!email) {
          return res.status(400).json({ message: "Email is required" });
        }

        const deletedPersonalInfo = await deletePersonalInfoByEmail(email);
        if (!deletedPersonalInfo) {
          return res
            .status(404)
            .json({ message: "Personal info record not found" });
        }
        res.status(204).end();
        break;
      }

      default:
        res.status(405).json({ message: "Method not allowed" });
        break;
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
