const { mydb } = require('../dbconnection')
const { mysql_real_escape_string: mysqlEscape } = require('../helpers')

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

function InsertNewProjectToDatabase(data){
    return new Promise((resolve, reject) => {
        let q = `INSERT INTO projets SET title='${data.title}', description='${mysqlEscape(data.description)}'`;
        mydb.query(q, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    })
}

module.exports = {
    selectAllProjetsFromDataBase,
    selectProjetWhereIdFromDataBase,
    InsertNewProjectToDatabase
}