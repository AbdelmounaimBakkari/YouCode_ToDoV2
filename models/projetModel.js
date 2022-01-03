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

function selectProjetWhereIdFromDataBase(projetId){
    return new Promise((resolve, reject) => {
        let q = `SELECT * FROM projets WHERE id = ${projetId}`;
        mydb.query(q, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
}

module.exports = {
    selectAllProjetsFromDataBase,
    selectProjetWhereIdFromDataBase
}