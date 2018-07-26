const pool = require("./database");

pool.query(`DROP TABLE posts`, (err, res) => {
  console.log(err, res)
  pool.end()
});
