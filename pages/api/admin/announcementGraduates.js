import announcementGraduates from "../../models/admin/announcementGraduates";
import PersonalInfo from "../../models/Onboarding/PersonalInfo";
import { connect } from "../../lib/db";
import nodemailer from "nodemailer";
import batchData from "../../models/trainer/batchData";

async function findGraduates() {
  await connect();
  const currentDate = new Date();
  const personalInfos = await PersonalInfo.find({ batchId: { $exists: true } });

  const graduateEmails = [];
  for (const personalInfo of personalInfos) {
    const batch = await batchData.findOne({ batchId: personalInfo.batchId });

    if (batch && batch.endDate) {
      const [day, month, year] = batch.endDate.split("/");
      const endDate = new Date(`20${year}`, month - 1, day);

      if (endDate < currentDate) {
        graduateEmails.push(personalInfo.email);
      }
    }
  }
  console.log(graduateEmails)
  return graduateEmails;
}

export default async function Announcements(req, res) {
  const { method } = req;
  await connect();
  switch (method) {
    case "GET":
      try {
        const announcement = await announcementGraduates.find({});
        res.status(200).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const announcement = await announcementGraduates.create(req.body);
        res.status(201).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      if (req.body.sendMail) {
        const { heading, message, link } = req.body;
        const graduates = await findGraduates();
        console.log(graduates);
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "hello@paralleledu.com",
            pass: "rcky rtal mtfo khca",
          },
        });
        for (const email of graduates) {
          const mailOptions = {
            from: "ParallelEdu <hello@paralleledu.com",
            to: email,
            subject: heading,
            text: `${message}\n ${link}`,
          };
          const info = await transporter.sendMail(mailOptions);
          console.log("Email sent:", info.response);
        }
        res.status(200).send("Email sent successfully");
      }
      break;
    default:
      res.status(405).json({ message: `Method ${method} not allowed` });
      break;
  }
}
