var http = require('http');
var url = require('url')

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = "your id=" + q.id + "<br>"+" your name=" + q.name + "<br>"+"your Father name=" + q.Fathername+"<br>"+ "your mother name=" + q.Mothername+"<br>"+ "your email=" + q.email+ "<br>"+"your Adharcard=" + q.Adharcard+"<br>"+ "your pincode =" + q.Pincode;

    console.log(txt);
    console.log(q);
    res.end(txt);
}).listen(2222);

console.log("port:7777")