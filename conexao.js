require('dotenv/config');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'dfaksqcs',
    host: 'motty.db.elephantsql.com',
    database: 'dfaksqcs',
    password: process.env.REACT_APP_DB_KEY,
    port: 5432
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query
}
