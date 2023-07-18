const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// const db = mysql.createConnection({
//     host: 'db-iot',
//     port: '3306',
//     user: 'mysql-database',
//     password: 'password',
//     database: 'fitness-park-iot',
// });
const db = mysql.createConnection({
    host: 'localhost',
    port: '6033',
    user: 'mysql-database',
    password: 'password',
    database: 'fitness-park-iot',
});

db.connect((err) => {
    if (err) {
        console.log('An error occured');
        throw err;
    }
    console.log('MySQL connected...');
});

module.exports = db;
