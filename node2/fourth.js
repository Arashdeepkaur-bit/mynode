var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "05062003",
    database: "student"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected");

    var sql = "INSERT INTO employ (id , name , salary ) VALUES (1, 'aman',30000),(2,'arash', 20977),(3, 'jaspreet',40000),(4, 'navpreet',50000),(5, 'mandeep',60000),(6, 'ravneet',10000),(7, 'abhi',70000);"

    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(" record inserted");
    });
});