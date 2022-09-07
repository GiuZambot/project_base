const conexao = require('../../conexao');
const { isNotUnicEmail } = require('../../ferramentas');

const cadastrarUsuario = async (req, res) => {
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
    if (await isNotUnicEmail(email))
      return res.status(400).json({ mensagem: "Já existe usuário cadastrado com o e-mail informado." });
  } catch (error) {
    return res.status(500).json({ mensagem: `Ocorreu um erro inesperado. - ${error.message}` });
  }

  try {
    await conexao.query(
      'insert into base_users (name, address, bornin, tel, category, coment, email) values ($1, $2, $3, $4, $5, $6, $7)',
      [name, address, bornin, tel, category, coment, email]);

    return res.status(201).send();
  }
  catch (error) {
    return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message });
  }
};

module.exports = cadastrarUsuario;
