const conexao = require('../conexao');
const jwt = require('jsonwebtoken');
const { getUsuarioById } = require('../ferramentas');
const tokenHash = process.env.REACT_APP_HASH;

const validaToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ mensagem: "Token não enviado." });

  const token = authorization.split(' ')[1];

  try {
    const { id } = jwt.verify(token, tokenHash);
    const { userEncontrado, usuario } = await getUsuarioById(id);

    if (!userEncontrado)
      return res.status(401).json({ mensagem: "O usuário logado não foi encontrado." });

    req.usuario = usuario;
    next();
  }
  catch (error) {
    return res.status(401).json({ mensagem: "Para acessar este recurso é necessário estar autenticado e fornecer token válido." + error });
  }
}

module.exports = { validaToken };
