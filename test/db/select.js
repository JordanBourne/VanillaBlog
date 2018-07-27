const sinon = require("sinon");
const { expect, assert } = require("chai");

const poolMock = require("../mocks/pool");
const Select = require("../../db/commands/select");

describe("Database:: Select::", () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    it("Should select into database", (done) => {
        let select = new Select({
            pool: poolMock,
            columns: ["col1", "col2"],
            where: {
                col3: "DATA",
                col4: "MOREDATA"
            },
            table: "targetTable"
        });

        select.select((err, res) => {
            assert(!err, "Should be no err");
            expect(res.arg1).to.equal(`SELECT col1, col2 FROM targetTable WHERE col3 = $1 AND col4 = $2`);
            expect(res.arg2).to.deep.equal(["DATA", "MOREDATA"]);
            return done();
        });
    });
});
