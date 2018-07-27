const sinon = require("sinon");
const { expect, assert } = require("chai");

const poolMock = require("../mocks/pool");
const Insert = require("../../db/commands/insert");

describe("Database:: Insert::", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    it("Should insert into database", (done) => {
        let insert = new Insert({
            pool: poolMock,
            data: {
                col1: "DATA",
                col2: "MOREDATA"
            },
            table: "targetTable"
        });

        insert.insertItem((err, res) => {
            assert(!err, "Should be no err");
            expect(res.arg1).to.equal(`INSERT INTO targetTable (col1, col2) VALUES ($1, $2)`);
            expect(res.arg2).to.deep.equal(["DATA", "MOREDATA"]);
            return done();
        });
    });
});
