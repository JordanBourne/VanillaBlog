const { Pool } = require("pg")
const commands = require("./commands");

class Database {
    constructor(params) {
        this.pool = new Pool({
          user: 'postgres',
          host: 'localhost',
          database: 'mydb',
          password: process.env.PGPASSWORD,
          port: 5432,
        });
    }

    insert(params, callback) {
        params.pool = this.pool;
        let insert = new commands.Insert(params);

        insert.insertItem(callback);
    }

    select(params, callback) {
        params.pool = this.pool;
        let select = new commands.Select(params);

        select.select(callback);
    }

    update(params, callback) {
        params.pool = this.pool;
        let update = new commands.Update(params);

        update.update(callback);
    }

    deleteFrom(params, callback) {
        params.pool = this.pool;
        let deleteFrom = new commands.DeleteFrom(params);

        deleteFrom.deleteFrom(callback);
    }
}

module.exports = Database;
