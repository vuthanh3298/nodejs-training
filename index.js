var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejstraining');

var sanphamRoute = require('./routes/sanpham.route');
app.use('/sanphams', sanphamRoute);

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(port, function() {
    console.log('server đang chạy ở port ' + port);
});