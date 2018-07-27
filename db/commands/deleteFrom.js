class Delete {
    constructor(params) {
        this.pool = params.pool;
        this.whereData = params.whereData;
        this.table = params.table;
        this.values = [];
        this.valueIndex = 1;
        this.deleteString = this._createDeleteString();
    }

    deleteFrom(callback) {
        this.pool.query(this.deleteString, this.values, callback);
    }

    _createDeleteString() {
        let deleteString = `DELETE FROM ${this.table} WHERE `;
        deleteString += this._getWhereClause();

        return deleteString;
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

module.exports = Delete;
