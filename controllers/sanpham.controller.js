var SanPham = require('../models/sanpham.model');

module.exports.index = async function(req, res) {
    var query = SanPham.find();
    var sanphams = await query.exec();
    res.render('sanphams/index', {
        dssp: sanphams
    })
}

module.exports.search = async function(req, res) {
    var query = SanPham.find({ 'name': { $regex: '.*' + req.query.name + '.*' } });
    var sanphams = await query.exec();
    res.render('sanphams/index', {
        dssp: sanphams
    })
}

module.exports.create = function(req, res) {
    res.render('sanphams/create');
}