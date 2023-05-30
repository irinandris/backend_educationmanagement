

app.post("/register", (req, res) => {
    const {name, lastname, sex,username, password  } = req.body;
    const sql = `INSERT INTO student (name, lastname, sex, username, password) VALUES (?, ?, ?, ?, ?)`;
    con.query(sql, [name, lastname, sex,username, password  ], function (err, result) {
      console.log(name,lastname,sex,username,password);
      // console.log(err);
      if (err) return res.end(err);
        console.log("1 recorded");
        res.send("successfully");
    });
  });