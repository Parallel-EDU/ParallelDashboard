import pool from "./pool";

const insertDataIntoTable = () => async (req, res) => {
  try {
    const { Name, Email, Phone_Number} = req.body;
    const data = {
      Name,
      Email,
      Phone_Number
    };

    pool.query("INSERT INTO experience set ?", data, (err, rows, fields) => {
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
