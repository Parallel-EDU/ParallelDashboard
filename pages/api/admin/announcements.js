import nodemailer from "nodemailer";
import TrainerData from "../../models/trainer/trainerData";
import { connect } from "../../lib/db";

async function getEmails() {
  await connect();
  const trainers = await TrainerData.find();
  return trainers.map((trainer) => trainer.personalEmail);
}

export default async function Announcements(req, res) {
  if (req.method === "POST") {
    const { heading, message, link } = req.body;
    const trainers = await getEmails();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hello@paralleledu.com",
        pass: "rcky rtal mtfo khca",
      },
    });
    for (const email of trainers) {
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
  } else {
    res.status(500).send("Error sending email");
  }
}
