const conexao = require('../../conexao');

const getUsers = async (req, res) => {
  const { rows } = await conexao.query('SELECT * FROM base_users');
  return res.status(200).json(rows);
}

module.exports = getUsers;
