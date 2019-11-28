var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodejstraining');
var SanPham = require('./models/sanpham.model');

var run = async function() {
    var query = SanPham.find();
    query.select('name');
    var sanphams = await query.exec();
    console.log(sanphams);
}

run();