const express = require("express");
const app = express();
const conn = require("./sqlcon");

app.get("/api/course/:id/:expType/:expAmt", (req, res) => {
  conn.ping((err) => {
    if (err) return res.status(500).send("MySQL Server is Down");

    console.log("Connected!");
    var sql =
      "INSERT INTO expense (id, exptype, expamt) VALUES (" +
      req.params.id +
      ",'" +
      req.params.expType +
      "'," +
      req.params.expAmt +
      ")";
   // console.log("------------", sql);
    conn.query(sql, (err, result) => {
      if (err) return res.send(err.sqlMessage);
      //console.log("1 record inserted");
      res.send(result);
    });
  });
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Lisitening on port...", port));
