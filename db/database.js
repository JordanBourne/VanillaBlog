const { Pool } = require("pg")

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: process.env.PGPASSWORD,
  port: 5432,
});

module.exports = pool;

//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
