var express = require('express');
var router = express.Router();

var bicicleta_controller = require('../src/controller/bicicleta_controller');

//listar
router.get('/', bicicleta_controller.bicicleta_list);

//crear
router.get('/create', bicicleta_controller.bicicleta_create_get);
router.post('/create', bicicleta_controller.bicicleta_create_post);

//update
router.get('/:id/update', bicicleta_controller.bicicleta_update_get);
router.post('/:id/update', bicicleta_controller.bicicleta_update_post);

//eliminar
router.post('/:id/delete', bicicleta_controller.bicicleta_delete_post);

module.exports = router;