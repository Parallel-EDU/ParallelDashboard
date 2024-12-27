import { jwtVerify } from "jose";

export default async function cookies(req, res) {
  if (req.method === "GET") {
    try {
      const token = req.cookies.token;
      const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));

      res.status(200).json(payload);
    } catch {
      res
        .status(500)
        .json({ message: "Internal Server Error" });
    }
  }
}
