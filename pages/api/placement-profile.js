import pool from "@/pages/api/pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, College_Name, College_Email, Designation } = req.body;
    const data = {
      Name,
      College_Name,
      College_Email,
      Designation,
    };  

    pool.query("INSERT INTO user_profile set ?", data, (err, rows, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(rows);
        res.send("added");
      }
    });
  } catch (err) {}
};

export default insertDataIntoTable();
