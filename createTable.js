const mySql = require('mysql')

const conn = mySql.createConnection({

    host:"localhost",
    user:"singh12345",
    password:"singh12345",
    database:"singhAcount"
})

conn.connect((err) => {
    if(err) throw err;
    console.log("connected")
    var qury = "CREATE TABLE expense (id VARCHAR(50) PRIMARY KEY, exptype VARCHAR(100), expamt INT(50))"
    conn.query(qury, (err, result) => {
        if(err) throw err;
        console.log('Table Created')

    });
});