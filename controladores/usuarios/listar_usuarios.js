const conexao = require('../../conexao');

const getUsers = async (req, res) => {
  const { rows } = await conexao.query('SELECT * FROM base_users');
  rows.shift();
  return res.status(400).json(rows);
}

module.exports = getUsers;
