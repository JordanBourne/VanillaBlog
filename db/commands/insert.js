class Insert {
    constructor(params) {
        this.pool = params.pool;
        this.data = params.data;
        this.table = params.table;
        this.values = [];
        this.insertString = this._createInsertionString();
    }

    insertItem(callback) {
        this.pool.query(this.insertString, this.values, callback);
    }

    _createInsertionString() {
        let columns = [];
        let values = [];
        let valueIndex = 1;

        for (let column in this.data) {
            columns.push(column);
            values.push(`$${valueIndex}`);
            valueIndex++;
            this.values.push(this.data[column]);
        }

        return `INSERT INTO ${this.table} (${columns.join(", ")}) VALUES (${values.join(", ")})`
    }
}

module.exports = Insert;
