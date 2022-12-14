const { getUsuarioById } = require('../../ferramentas');

const detalharUsuario = async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id
    try {
        const { userEncontrado, usuario } = await getUsuarioById(id);
        if (!userEncontrado)
            return res.status(400).json({ mensagem: "Usuário não encontrado." });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro inesperado. - ${error.message}` });
    }
};

module.exports = detalharUsuario;
