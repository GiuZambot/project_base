const conexao = require('../../conexao');

const atualizarUsuario = async (req, res) => {
    const {
        name,
        address,
        bornin,
        tel,
        category,
        coment,
        email
    } = req.body;

    try {
        await conexao.query(
            'UPDATE base_users SET name = $1, address = $2, bornin=$3, tel=$4, category=$5, coment=$6 WHERE email = $7;',
            [name, address, bornin, tel, category, coment, email]);

        return res.status(201).send();
    }
    catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
    }
};

module.exports = atualizarUsuario;
