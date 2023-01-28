const app = require('./appexpCon');
const conn = require("./sqlcon");

function selectExpTable() {
  app.get("/api/fetch/exp/:id/:fromDt/:toDt", (req, res) => {
    conn.ping((err) => {
     if (err) return res.status(500).send("MySQL Server is Down");
      console.log("Connected!");
      var sql =
        "SELECT * FROM expense WHERE date(id) between date('" +
        req.params.fromDt +
        "') AND date('" +
        req.params.toDt +
        "')";
  
     // console.log("------------", sql);
      conn.query(sql, (err, result) => {
        if (err){
           console.log("Error:      "+err);
           return res.send(err.sqlMessage);
          }
       // console.log("1 record inserted      "+JSON.stringify(result.rows));
       // res.send(JSON.stringify(result.rows));
        res.send(result);
      });
    });
  });
}

module.exports = selectExpTable;
