const dotenv = require("dotenv").config();
const mysql = require("mysql");

const databasesMysql = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASES,
});

databasesMysql.connect(function (error) {
    if (error) {
        console.log(error);
    }
});

module.exports = databasesMysql;
