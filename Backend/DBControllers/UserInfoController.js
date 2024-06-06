// GET request to fetch all userinfo
app.get('/userinfo', (req, res) => {
    const sql = 'SELECT * FROM userinfo';
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    });
  });
  
  // POST request to insert a new userinfo
  app.post('/userinfo', (req, res) => {
    const newUserInfo = req.body;
    const sql = 'INSERT INTO userinfo SET ?';
    db.query(sql, newUserInfo, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(`User info added with ID: ${results.insertId}`);
      }
    });
  });
  
  // PUT request to update a user's information in userinfo
  app.put('/userinfo/:id', (req, res) => {
    const userInfoId = req.params.id;
    const updateUserInfo = req.body;
    const sql = 'UPDATE userinfo SET ? WHERE ID = ?';
    db.query(sql, [updateUserInfo, userInfoId], (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`User info with ID: ${userInfoId} updated`);
      }
    });
  });
  
  // DELETE request to delete a userinfo
  app.delete('/userinfo/:id', (req, res) => {
    const userInfoId = req.params.id;
    const sql = 'DELETE FROM userinfo WHERE ID = ?';
    db.query(sql, userInfoId, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(`User info with ID: ${userInfoId} deleted`);
      }
    });
  });