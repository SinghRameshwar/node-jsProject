const conn = require("./sqlcon");
const app = require('./appexpCon');


function deleteTable(){
app.get("/api/delete_row/exp/:cid/:id",(req,res) =>{
  conn.ping((err) => {
    if (err) return res.status(500).send("MySQL Server is Down");
    var qury = "DELETE FROM expense WHERE id = "+req.params.id+"";
    conn.query(qury, (err, result) => {
      if (err) return res.send(err);
      //console.log("Table Deleted");
      res.send("Delete Row "+req.params.id);
    });
  });
});
}

module.exports = deleteTable;