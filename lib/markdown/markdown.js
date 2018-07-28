class Markdown {
    constructor(params) {
        this.text = params.text
    }

    tokenize() {
        return this.text;
    }

    toHTML() {

    }
}

module.exports = Markdown;
