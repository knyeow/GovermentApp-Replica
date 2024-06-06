const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8090;

app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'admin123',
  password: 'admin',
  database: 'edevlet'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// GET request to fetch all users
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// POST request to insert a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  const sql = 'INSERT INTO user SET ?';
  db.query(sql, newUser, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  });
});

// PUT request to update a user's information
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  const sql = 'UPDATE user SET ? WHERE ID = ?';
  db.query(sql, [updateUser, userId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`User with ID: ${userId} updated`);
    }
  });
});

// DELETE request to delete a user
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM user WHERE ID = ?';
  db.query(sql, userId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`User with ID: ${userId} deleted`);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
