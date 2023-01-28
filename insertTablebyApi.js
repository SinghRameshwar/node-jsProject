const app = require("./appexpCon");
const conn = require("./sqlcon");

function insertData() {
  app.get("/api/insert/exp/:id/:expType/:expAmt", (req, res) => {
   conn.ping((err) => {
     if (err) return res.status(500).send("MySQL Server is Down");

      // console.log("Connected!");
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
        if (err) {
          if (err.sqlMessage.split(" ", 1)[0] == "Duplicate") {
            var sql1 =
              "UPDATE expense SET exptype = '"+req.params.expType+"', expamt = "+req.params.expAmt+" WHERE id = "+req.params.id+"";
            conn.query(sql1, (err, result) => {
              if (err) {
                console.log("Error1: ",err);
                return res.send(err.sqlMessage);
              }
              return res.send("Update " + req.params.expType);
            });
          } else {
            console.log("Error2: ",err);
            return res.send(err.sqlMessage);
          }
          return
        }
        //console.log("1 record inserted");
        res.send(req.params.expType + " Insert in DataBase");
      });
    });
  });
}

module.exports = insertData;
