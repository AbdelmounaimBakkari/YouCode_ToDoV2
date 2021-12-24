const mysql = require('mysql');

const mydb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todowithnode'
});

mydb.connect((err)=> {
    if(err) throw err;
    console.log('MySQL connection');
}) ;

module.exports ={
    mydb
};