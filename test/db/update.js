const sinon = require("sinon");
const { expect, assert } = require("chai");

const poolMock = require("../mocks/pool");
const Update = require("../../db/commands/update");

describe("Database:: Update::", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    it("Should update into database", (done) => {
        let update = new Update({
            pool: poolMock,
            data: {
                col1: "DATA",
                col2: "MOREDATA"
            },
            whereData: {
                col3: "OLDDATA",
                col4: "OTHEROLDDATA"
            },
            table: "targetTable"
        });

        update.updateItem((err, res) => {
            assert(!err, "Should be no err");
            expect(res.arg1).to.equal(`UPDATE targetTable SET (col1, col2) = ($1, $2) WHERE col3 = $3 AND col4 = $4`);
            expect(res.arg2).to.deep.equal(["DATA", "MOREDATA", "OLDDATA", "OTHEROLDDATA"]);
            return done();
        });
    });
});
