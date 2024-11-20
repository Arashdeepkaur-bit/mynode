var http = require('http');
var url = require('url')

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = "your id=" + q.id + "your name=" + q.name;

    console.log(txt);
    console.log(q);

    res.write("<br>chaklo rivolver and riffles")
    res.end(txt);
}).listen(1111);

console.log("port:1111")