const pool = require("./database");
const schema = require("./schema");
const { promisify } = require("util");

for (let table in schema) {
    initTable(table).catch(err => {
        console.log("ERR: ", err);
    });
}

async function initTable(table) {
    let createTableString = getCreateTableString(schema[table].name, schema[table].columns);
    await pool.query(createTableString);
    for (index of schema[table].indexes) {
        await pool.query(`CREATE INDEX ${index} ON ${schema[table].name} (${index});`);
    }
    pool.end();
}

function getCreateTableString(tableName, columns) {
    let createString = `CREATE TABLE ${tableName}(`;
    let columnDefinitions = ["id SERIAL PRIMARY KEY"];
    for (let i = 0; i < columns.length; i++) {
        columnDefinitions.push(`${columns[i].name} ${columns[i].type}`);
    }
    createString = createString + columnDefinitions.join(", ") + ")";
    return createString;
}
