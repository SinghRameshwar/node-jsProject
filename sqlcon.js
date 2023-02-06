
const mySql = require("mysql");

const con = mySql.createConnection({
  host: "54.248.129.129",
  port:3306,
  user: "singh12345",
  password: "singh12345",
  database: "singhacount",
  ssl: true
});

con.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("connected to Database");
  }
});

module.exports = con;

// Create Data Base Query
// con.query('CREATE DATABASE singhacount',(err, result) => {
//     if(err) throw err;
//     console.log("Database created:-   ", result);
//    })
