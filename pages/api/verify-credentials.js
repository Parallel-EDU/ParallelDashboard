import pool from "@/pages/api/pool";

const DataFromTable = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM userinfo");
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



export default DataFromTable;
