const sinon = require("sinon");
const { expect, assert } = require("chai");

const poolMock = require("../mocks/pool");
const DeleteFrom = require("../../db/commands/deleteFrom");

describe.only("Database:: DeleteFrom::", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    it("Should deleteFrom into database", (done) => {
        let deleteFrom = new DeleteFrom({
            pool: poolMock,
            whereData: {
                col1: "DATA",
                col2: "MOREDATA"
            },
            table: "targetTable"
        });

        deleteFrom.deleteFrom((err, res) => {
            assert(!err, "Should be no err");
            expect(res.arg1).to.equal(`DELETE FROM targetTable WHERE col1 = $1 AND col2 = $2`);
            expect(res.arg2).to.deep.equal(["DATA", "MOREDATA"]);
            return done();
        });
    });
});
