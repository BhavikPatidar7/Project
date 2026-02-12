const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "LalaPatidar7#",
    database: "store_rating"
});

module.exports = db;
