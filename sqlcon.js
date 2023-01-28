
const Pool = require('pg').Pool
const con = new Pool({
  user: 'singha_user',
  host: 'dpg-cf8j9u1gp3jqqes4g14g-a.oregon-postgres.render.com',
  database: 'singha',
  password: 'qx3m8fRxHun8zJZT8soHnsEPpZ0oLwEk',
  port: 5432,
  ssl: true
})


// const mySql = require("mysql");

// const con = mySql.createConnection({
//   host: "localhost",
//   user: "singh12345",
//   password: "singh12345",
//   database: "singhAcount",
// });

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
