const app = require('./appexpCon');

// const crtTable = require('./createTable')
// crtTable.ping((err) =>{
//     if(err) return
// });


const insertTbl = require('./insertTablebyApi')
insertTbl()

const slstExpData = require('./expTableList');
slstExpData()

 const tblDlt = require('./tableDlt');
 tblDlt()


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Lisitening on port...", port));
