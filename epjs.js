const path = require('path');
const express = require('express');
const ejs = require('ejs');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(__dirname);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


app.get('/', (req, res) => {

    res.render("list");

});

app.get('/add', (req, res) => {
    res.render("add");
});
app.get('/mod', (req, res) => {
    res.render("mod");
});

app.listen(8000, () => {
    console.log('Server is running at port 8000');
});