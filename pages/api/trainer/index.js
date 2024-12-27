import { connect } from "../../lib/db";
import Trainer from "../../models/trainer/trainerData";
import bcryptjs from "bcrypt";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    await connect();

    const { email, password } = req.body;
    console.log(req.body);

    const trainer = await Trainer.findOne({ email });
    if (!trainer) {
      return res.status(404).json({ error: "trainer does not exist" });
    }

    const validPassword = await bcryptjs.compare(password, trainer.password);
    console.log(bcryptjs.trainer.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    console.log("generated token", token);

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        path: "/",
      })
    );

    return res.json({
      message: "Login successful",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
