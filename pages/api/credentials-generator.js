import pool from "./pool";

const insertDataIntoTable = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const { createdusername, createdpassword, phonenumber } = req.body;

    const data = [phonenumber, createdusername, createdpassword, phonenumber];

    const query = `
      UPDATE userinfo 
      SET phonenumber = ?, createdusername = ?, createdpassword = ? 
      WHERE phonenumber = ?`;
    const [rows, fields] = await pool.query(query, data);

    res.status(200).send("Data updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export default insertDataIntoTable;
