const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());  // Corrected

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "edevlet",
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post("/edevlet", (req, res) => {
  const sql = "SELECT * FROM user WHERE TC = ? AND password = ?";  // Corrected
  db.query(sql, [req.body.TC, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    
    if (data.length > 0) {
      console.log(data[0].ID);
      return res.json(data);
    } 
    
    else {
      return res.json("Failed");
    }
  });
});

app.listen(8081, () => {
  console.log("listening on port 8081");
});
