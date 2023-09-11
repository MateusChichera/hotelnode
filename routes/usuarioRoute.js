const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

class UsuarioRoute {

    #router;

    get router(){
        return this.#router;
    }

    constructor() {
        this.#router = express.Router();

        let ctrl = new UsuarioController();
        this.#router.get('/', ctrl.listarView);
        this.#router.get('/cadastrar', ctrl.cadastrarView);
        this.#router.post('/cadastrar', ctrl.cadastrar);
        this.#router.post('/excluir', ctrl.excluir);
        
    }
}

module.exports = UsuarioRoute