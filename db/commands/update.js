class Update {
    constructor(params) {
        this.pool = params.pool;
        this.data = params.data;
        this.whereData = params.whereData;
        this.table = params.table;
        this.values = [];
        this.valueIndex = 1;
        this.updateString = this._createUpdateString();
    }

    updateItem(callback) {
        this.pool.query(this.updateString, this.values, callback);
    }

    _createUpdateString() {
        let updateString = `UPDATE ${this.table} SET `;

        updateString += this._getNewFields();
        updateString += " WHERE ";
        updateString += this._getWhereClause();

        return updateString;
    }

    _getNewFields() {
        let dataColumns = [];
        let dataValues = [];

        for (let column in this.data) {
            dataColumns.push(column);
            dataValues.push(`$${this.valueIndex}`);
            this.valueIndex++;
            this.values.push(this.data[column]);
        }

        return `(${dataColumns.join(", ")}) = (${dataValues.join(", ")})`;
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

module.exports = Update;
