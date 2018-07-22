const blogPosts = require("./blogPosts");

module.exports = {
    posts: [
        {
            link: blogPosts.post[0].link,
            title: blogPosts.post[0].title,
        },
        {
            link: blogPosts.post[1].link,
            title: blogPosts.post[1].title,
        }
    ]
}
