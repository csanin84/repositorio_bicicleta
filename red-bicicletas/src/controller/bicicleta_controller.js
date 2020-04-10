var Bicicleta = require('../model/bicicleta');

// listar bicicletas
exports.bicicleta_list = function(req, res){    
    res.render('bicicleta/index', {bicis : Bicicleta.allBicicletas});
}

//crear bicicleta
exports.bicicleta_create_get = function(req, res){
    res.render('bicicleta/create');
}

exports.bicicleta_create_post = function(req, res){
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo, []);
    bici.ubicacion = [req.body.lat, req.body.lon];
    Bicicleta.add(bici);
    console.log(Bicicleta.allBicicletas.toString());

    res.redirect('/bicicleta');
}

// update bicicleta
exports.bicicleta_update_get = function(req, res){
    var bicicleta = Bicicleta.findById(req.params.id);  

    res.render('bicicleta/update', {bicicleta});}

exports.bicicleta_update_post = function(req, res){
    var bicicleta = Bicicleta.findById(req.params.id);  
    bicicleta.id = req.body.id;
    bicicleta.color = req.body.color;
    bicicleta.modelo = req.body.modelo;    
    bicicleta.ubicacion = [req.body.lat, req.body.lon];   

    res.redirect('/bicicleta');
}

// eliminar bicicleta
exports.bicicleta_delete_post = function(req, res){
    Bicicleta.removeById(req.body.id);

    res.redirect('/bicicleta')
}