const express = require('express');
const rotas = express();
const validaToken = require('./intermediarios/autenticar');

const {
    cadastrarUsuario,
    logarUsuario,
    detalharUsuario,
    atualizarUsuario,
    getUsers,
} = require('./controladores/usuarios');

const welcome = async (req, res) => {
    return res.status(400).json({ site: "welcome" });
}

rotas.get('/', welcome);
rotas.post('/usuario', cadastrarUsuario);
rotas.post('/login', logarUsuario);

rotas.use(validaToken);

rotas.get('/usuario/:id', detalharUsuario);
rotas.get('/usuarios', getUsers);
rotas.put('/usuario', atualizarUsuario);

module.exports = rotas;
