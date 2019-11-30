var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

var sanphamRoute = require('./routes/sanpham.route');
app.use('/sanphams', sanphamRoute);

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(port, function() {
    console.log('server đang chạy ở port ' + port);
});