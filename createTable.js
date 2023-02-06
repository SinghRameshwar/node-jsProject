const conn = require("./sqlcon");

  var qury =
    "CREATE TABLE expense (id VARCHAR(50) PRIMARY KEY, exptype VARCHAR(100), expamt INT(50))";
  // const qury = 'CREATE TABLE IF NOT EXISTS "expense" ("id" VARCHAR(100),"exptype" VARCHAR(100) NOT NULL,"expamt" VARCHAR(50) NOT NULL,PRIMARY KEY ("id"));'
  conn.query(qury, (err, result) => {
    if (err) throw err;
    console.log("Table Created");
  });

module.exports = conn;
