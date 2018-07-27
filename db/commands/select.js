class Select {
    constructor(params) {
        this.pool = params.pool;
        this.selectColumns = params.selectColumns;
        this.whereData = params.whereData;
        this.table = params.table;
        this.values = [];
        this.valueIndex = 1;
        this.selectString = this._createSelectionString();
    }

    select(callback) {
        this.pool.query(this.selectString, this.values, callback);
    }

    _createSelectionString() {
        let selectionString = `SELECT ${this.selectColumns.join(", ")}`;
        selectionString += ` FROM ${this.table}`
        selectionString += ` WHERE ${this._getWhereClause()}`;

        return selectionString;
    }

    _getWhereClause() {
        let whereColumns = [];
        let whereValues = [];
        let whereClause = [];

        for (let column in this.whereData) {
            whereColumns.push(column);
            whereValues.push(`$${this.valueIndex}`);
            this.valueIndex++;
            this.values.push(this.whereData[column]);
        }

        for (let i = 0; i < whereColumns.length; i++) {
            whereClause.push(`${whereColumns[i]} = ${whereValues[i]}`);
        }

        return whereClause.join(" AND ");
    }
}

module.exports = Select;
