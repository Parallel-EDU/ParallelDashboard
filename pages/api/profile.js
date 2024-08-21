import pool from "./pool";

const insertDataIntoTable = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed");
    return;
  }

  try {
    const {
      Name,
      userName,
      College,
      selectedYear,
      selectedPassingYear,
      allLocation,
      remote,
      bangalore,
      hyderabad,
      chennai,
      delhi,
      mumbai,
      gurgaon,
      ahmedabad,
      noida,
      pune,
      nashik,
      chattisgarh,
      phonenumber,
    } = req.body;

    const data = [
      Name,
      userName,
      College,
      selectedYear,
      phonenumber,
      selectedPassingYear,
      allLocation,
      remote,
      bangalore,
      hyderabad,
      chennai,
      delhi,
      mumbai,
      gurgaon,
      ahmedabad,
      noida,
      pune,
      nashik,
      chattisgarh,
      phonenumber,
    ];

    const query = `
      UPDATE user_profile 
      SET Name = ?, userName = ?, College = ?, selectedYear = ?, phonenumber = ?, 
          selectedPassingYear = ?, allLocation = ?, remote = ?, bangalore = ?, 
          hyderabad = ?, chennai = ?, delhi = ?, mumbai = ?, gurgaon = ?, ahmedabad = ?, 
          noida = ?, pune = ?, nashik = ?, chattisgarh = ? 
      WHERE phonenumber = ?`;

    const [rows, fields] = await pool.query(query, data);

    res.status(200).send("Data updated successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export default insertDataIntoTable;
