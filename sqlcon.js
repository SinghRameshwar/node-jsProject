const mySql = require("mysql");

const con = mySql.createConnection({
  host: "localhost",
  user: "singh12345",
  password: "singh12345",
  database: "singhAcount",
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

//con.query('CREATE DATABASE singhAcount',(err, result) => {
//     if(err) throw err;
//     console.log("Database created:-   ", result);
//    })
