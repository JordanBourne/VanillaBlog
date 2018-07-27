const Database = require("../../db/database");

class CreatePost {
    constructor(params) {
        this.post = params.post;
    }

    parsePost() {

    }

    savePostToDatabase(callback) {
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
