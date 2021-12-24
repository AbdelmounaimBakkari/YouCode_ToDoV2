const { mydb } = require('../dbconnection')

function selectAllProjetsFromDataBase(){
    return new Promise((resolve,reject) => {
        let q = "SELECT * FROM projets";
        mydb.query(q, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
}

// mydb.connect(function(err) {
//     if (err) throw err;
//     mydb.query("SELECT * FROM projets", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
// });

module.exports = {
    selectAllProjetsFromDataBase
}