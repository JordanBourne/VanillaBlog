class Select {
    constructor(params) {
        this.pool = params.pool;
        this.columns = params.columns;
        this.where = params.where;
        this.table = params.table;
        this.order = params.order;
        this.values = [];
        this.valueIndex = 1;
        this.selectString = this._createSelectionString();
    }

    select(callback) {
        this.pool.query(this.selectString, this.values, callback);
    }

    _createSelectionString() {
        let selectionString = `SELECT ${this.columns.join(", ")}`;
        selectionString += ` FROM ${this.table}`
        selectionString += ` WHERE ${this._getWhereClause()}`;

        if (this.order) {
            selectionString += ` ORDER BY ${this.order}`;
        }

        return selectionString;
    }

    _getWhereClause() {
        let whereColumns = [];
        let whereValues = [];
        let whereClause = [];

        for (let column in this.where) {
            whereColumns.push(column);
            whereValues.push(`$${this.valueIndex}`);
            this.valueIndex++;
            this.values.push(this.where[column]);
        }

        for (let i = 0; i < whereColumns.length; i++) {
            whereClause.push(`${whereColumns[i]} = ${whereValues[i]}`);
        }

        return whereClause.join(" AND ");
    }
}

module.exports = Select;
