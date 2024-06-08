const express = require('express');
const router = express.Router();



// GET request to fetch all users
router.get('', (req, res) => {
  const sql = 'SELECT * FROM user';
  req.db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// POST request to insert a new user
router.post('/users', (req, res) => {
  const newUser = req.body;
  const sql = 'INSERT INTO user SET ?';
  req.db.query(sql, newUser, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  });
});

// PUT request to update a user's information
router.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updateUser = req.body;
  const sql = 'UPDATE user SET ? WHERE ID = ?';
  req.db.query(sql, [updateUser, userId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`User with ID: ${userId} updated`);
    }
  });
});

// DELETE request to delete a user
router.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM user WHERE ID = ?';
  req.db.query(sql, userId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(`User with ID: ${userId} deleted`);
    }
  });
});

module.exports = router;

