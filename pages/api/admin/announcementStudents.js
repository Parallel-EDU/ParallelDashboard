import announcementStudent from "../../models/admin/announcementStudents";
import PersonalInfo from "../../models/Onboarding/PersonalInfo";
import { connect } from "../../lib/db";
import nodemailer from "nodemailer";

export default async function Announcements(req, res) {
  const { method } = req;
  await connect();
  switch (method) {
    case "GET":
      try {
        const announcement = await announcementStudent.find({});
        res.status(200).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const announcement = await announcementStudent.create(req.body);
        res.status(201).json(announcement);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      if (req.body.sendMail) {
        const { heading, message, link } = req.body;
        const nonGraduates = await PersonalInfo.find({ batchId: req.body.batchId });
        const mails = [];
        for (const nonGraduate of nonGraduates) {
          mails.push(nonGraduate.email);
        }
        console.log(nonGraduates);
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "hello@paralleledu.com",
            pass: "rcky rtal mtfo khca",
          },
        });
        for (const mail of mails) {
          const mailOptions = {
            from: "ParallelEdu <hello@paralleledu.com",
            to: mail,
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
