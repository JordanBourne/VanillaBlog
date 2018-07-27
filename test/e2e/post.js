// const sinon = require("sinon")
// const { expect, assert } = require("chai");
//
// const mocks = require("../mocks/blogPosts");
// const CreatePost = require("../../lib/posts/createPost");
// const GetPost = require("../../lib/posts/getPost");
// const UpdatePost = require("../../lib/posts/updatePost");
//
// describe("Post::", () => {
//     describe("Should create post from mock", () => {
//         it("Should create the post", (done) => {
//             let mockPost = mocks.post[0];
//             let createPost = new CreatePost({post: mockPost});
//
//             createPost.savePostToDatabase((err) => {
//                 assert(!err, "Error inserting data to database");
//                 return done();
//             });
//         });
//         it("Should get the post", (done) => {
//             let mockPost = mocks.post[0];
//             let getPost = new GetPost({title: mocks.post[0].title});
//
//             getPost.getPostByField((err, post) => {
//                 assert(!err, "Error inserting data to database");
//                 expect(post.title).to.equal(mocks.post[0].title);
//                 expect(post.link).to.equal(mocks.post[0].link);
//                 return done();
//             });
//         });
//         it("Should update the post", (done) => {
//             let mockPost = mocks.post[0];
//             let updatePost = new GetPost({title: mocks.post[0].title});
//
//             updatePost.updatePostFields((err, post) => {
//                 assert(!err, "Error inserting data to database");
//                 expect(post.title).to.equal(mocks.post[0].title);
//                 expect(post.link).to.equal(mocks.post[0].link);
//                 return done();
//             });
//         });
//         it("Should get the post", (done) => {
//             let mockPost = mocks.post[0];
//             let createPost = new CreatePost({post: mockPost});
//
//             createPost.savePostToDatabase()
//             expect().to.equal(mockPost.title);
//             return done();
//         });
//         it("Should delete the post", (done) => {
//             let mockPost = mocks.post[0];
//             let createPost = new CreatePost({post: mockPost});
//
//             createPost.savePostToDatabase()
//             expect().to.equal(mockPost.title);
//             return done();
//         });
//         it("Should handle not getting the post", (done) => {
//             let mockPost = mocks.post[0];
//             let createPost = new CreatePost({post: mockPost});
//
//             createPost.savePostToDatabase()
//             expect().to.equal(mockPost.title);
//             return done();
//         });
//     });
// });
