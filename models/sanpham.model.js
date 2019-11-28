var mongoose = require('mongoose');

var sanPhamSchema = new mongoose.Schema({
    name: String,
    price: String
});

var SanPham = mongoose.model('SanPham', sanPhamSchema, 'sanphams');

module.exports = SanPham;