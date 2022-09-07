const cadastrarUsuario = require('./cadastrar_usuario');
const logarUsuario = require('./logar_usuario');
const detalharUsuario = require('./detalhar_usuario');
const atualizarUsuario = require('./atualizar_usuario.js');
const getUsers = require('./listar_usuarios.js');

module.exports = {
    cadastrarUsuario,
    logarUsuario,
    detalharUsuario,
    atualizarUsuario,
    getUsers
};
