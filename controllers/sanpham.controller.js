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

module.exports.postCreate = function(req, res) {
    // var name = req.body.name;
    // var price = req.body.price;
    // var sp = new SanPham({
    //     name: name,
    //     price: price
    // });
    //SanPham.create(sp);

    SanPham.create(req.body);
    res.redirect('/sanphams');
}