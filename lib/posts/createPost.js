const { markdown } = require("markdown");
const Database = require("../../db/database");

class CreatePost {
    constructor(params) {
        this.post = {};
        this.post.title = params.post.title;
        this.post.link = params.post.link;
        this.post.body = this.parseBody(params.post.body);
        this.post.preview = this.getPreview(params.post.body);
        this.post.date = new Date().toISOString().substr(0, 10);
        this.post.author = params.post.author || "Jordan Bourne";
    }

    parseBody(body) {
        return markdown.toHTML(body);
    }

    getPreview(body) {
        return body.split("\n")[0];
    }

    saveToDatabase(callback) {
        let db = new Database();

        db.insert({
            data: this.post,
            table: "posts" //TODO: create config for table names
        }, (err, res) => {
            if (err) throw err;

            return callback();
        });
    }
}

module.exports = CreatePost;
