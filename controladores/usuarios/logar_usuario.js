const conexao = require('../../conexao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tokenHash = process.env.REACT_APP_HASH;

const logarUsuario = async (req, res) => {
  const { senha, email } = req.body;

  const { rows } = await conexao.query('SELECT * FROM base_users WHERE email = $1;', [email]);

  const senhaCorreta = await bcrypt.compare(senha, rows[0].senha);

  if (senhaCorreta) {
    const token = jwt.sign({ id: rows[0].id }, tokenHash, { expiresIn: '8h' });
    return res.status(200).json(token);
  }

  return res.status(401)
}

module.exports = logarUsuario;
