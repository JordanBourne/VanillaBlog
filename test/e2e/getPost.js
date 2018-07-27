const assert = require("chai").assert;
const expect = require("chai").expect;
const http = require("http");

const app = require("../../index");

describe("E2E::", () => {
    let server;

    beforeEach(() => {
        server = app.listen(3000);
    });

    afterEach(() => {
        server.close();
    });

    it("Should load making-an-mvp blog post", (done) => {
        http.get({
            hostname: "localhost",
            port: 3000,
            path: "/post/making-an-mvp",
            agent: false
        }, (res) => {
            res.setEncoding("utf8");
            assert(res);
            expect(res.statusCode).to.equal(200);
            let rawData = "";
            res.on("data", (chunk) => {
                rawData += chunk;
            });
            res.on("end", () => {
                assert(rawData.indexOf("The Makings of a Minimum Viable Product") > 0);
                return done();
            });
        });
    });
});

function renderTitle (req, res, next) {
    res.render(basicPagePath, { title: req.params.title });
}
