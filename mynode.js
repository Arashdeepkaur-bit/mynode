const http = require('http');
const power = require('./mynode/power');
const add = require('./mynode/add');
const sub = require('./mynode/sub');
const multiply = require('./mynode/multiply');
const divide = require('./mynode/divide');
const facto = require('./mynode/facto');
const sqrt = require('./mynode/sqrt');
const modulus = require('./mynode/modulus');
const square = require('./mynode/square');
http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>power: " + power.power(6,2));
    res.write("<h1>add: " + add.add(24, 35));
    res.write("<h1>Sub: " + sub.sub(14, 15));
    res.write("<h1>multiply: " + multiply.multiply(41,45));
    res.write("<h1>divide: " + divide.divide(4, 32));
    res.write("<h1>facto: " + facto.facto(6));
    res.write("<h1>sqrt: " + sqrt.sqrt(100));
    res.write("<h1>square: " + square.square(9));
    res.write("<h1>modulus: " + modulus.modulus(10,3));
    res.write("<br><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    res.end();
}).listen(7777);
console.log("port:7777")
