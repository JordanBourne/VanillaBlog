class Markdown {
    constructor(params) {
        this.text = params.text;
        this.tokenize();
    }

    tokenize() {
        this.paragraphs = this.text.split("\n\n");
    }

    toHTML() {
        for (let i = 0; i < this.paragraphs.length; i++) {
            this.paragraphs[i] = this._createLists(this.paragraphs[i]);
            this.paragraphs[i] = this._createCodeBlocks(this.paragraphs[i]);
        }
        let html = this.paragraphs.join("</p>\n<p>");
        html = "<p>" + html + "</p>";

        return html;
    }

    _createLists(paragraph) {
        let lines = paragraph.split("\n");
        let listStarted = false;

        for (let k = 0; k < lines.length; k++) {
            if (lines[k].charAt(0) === "*") {
                lines[k] = lines[k].replace("*", "<li>") + "</li>";

                if (!listStarted) {
                    listStarted = true;
                    lines.splice(k, 0, "<ul>");
                    k++;
                }
            } else {
                if (listStarted) {
                    lines.splice(k, 0, "</ul>");
                    k++;
                }
                listStarted = false;
            }
        }

        if (listStarted) {
            lines.push("</ul>");
        }

        return lines.join("\n");
    }

    _createCodeBlocks(paragraph) {
        let lines = paragraph.split("\n");
        let codeStarted = false;

        for (let k = 0; k < lines.length; k++) {
            if (lines[k].indexOf("```") === 0) {
                if (!codeStarted) {
                    let language = (lines[k].split("#") || []).pop();
                    lines[k] = `<pre class="${language}">`;
                } else {
                    lines[k] = `</pre>`;
                }

                codeStarted = !codeStarted;
            } else {
                if (codeStarted) {
                    lines[k] = lines[k].replace(/</g, "&lt;");
                    lines[k] = lines[k].replace(/>/g, "&gt;");
                    lines[k] = "<code>" + lines[k] + "</code>";
                }
            }
        }

        return lines.join("\n");
    }
}

module.exports = Markdown;
