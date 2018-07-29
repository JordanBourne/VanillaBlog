const sinon = require("sinon");
const { assert, expect } = require("chai");

const Markdown = require("../lib/markdown/markdown");

describe.only("Markdown::", () => {
    it("Should split into paragraphs", () => {
        let markdown = new Markdown({
            text: "Hello\n\nWorld"
        });

        expect(markdown.toHTML()).to.equal("<p>Hello</p>\n<p>World</p>");
    });
    it("Should create lists", () => {
        let markdown = new Markdown({
            text: "*item1\n*item2\n*item3"
        });

        expect(markdown.toHTML()).to.equal("<p><ul>\n<li>item1</li>\n<li>item2</li>\n<li>item3</li>\n</ul></p>");
    });
    it("Should create code blocks", () => {
        let markdown = new Markdown({
            text: "```#html\n <html>\n  <body>\n   HelloWorld\n  </body>\n </html>\n```"
        });

        expect(markdown.toHTML()).to.equal("<p><pre class=\"html\">\n<code> &lt;html&gt;</code>\n<code>  &lt;body&gt;</code>\n<code>   HelloWorld</code>\n<code>  &lt;/body&gt;</code>\n<code> &lt;/html&gt;</code>\n</pre></p>");
    });
});
