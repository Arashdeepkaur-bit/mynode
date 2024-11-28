var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "05062003",
    database: "student"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE employ ( id int (10),name VARCHAR(255),salary int(255))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});