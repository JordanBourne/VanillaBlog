module.exports = {
    name: "posts",
    indexes: ["id", "title", "date"],
    columns: [{
        name: "title",
        type: "VARCHAR(40)"
    }, {
        name: "author",
        type: "VARCHAR(40)"
    }, {
        name: "date",
        type: "VARCHAR(40)"
    }, {
        name: "preview",
        type: "VARCHAR(1000)"
    }, {
        name: "link",
        type: "VARCHAR(100)"
    }, {
        name: "body",
        type: "VARCHAR(10000)"
    }]
}
