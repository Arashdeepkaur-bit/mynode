var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "june2024"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");

    var sql = "INSERT INTO customers (name, address) VALUES ('aman', 'mohali')";

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});