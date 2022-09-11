const cadastrarUsuario = require('./cadastrar_usuario');
const detalharUsuario = require('./detalhar_usuario');
const atualizarUsuario = require('./atualizar_usuario.js');
const getUsers = require('./listar_usuarios.js');
const logarUsuario = require('./logar_usuario.js');

module.exports = {
    cadastrarUsuario,
    detalharUsuario,
    atualizarUsuario,
    getUsers,
    logarUsuario
};
