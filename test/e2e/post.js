const sinon = require("sinon")
const { expect, assert } = require("chai");

const mocks = require("../mocks/blogPosts");
const CreatePost = require("../../lib/posts/createPost");

describe("CreatePost::", () => {
    describe("Should create post from mock", () => {
        it("Should create the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase((err) => {
                assert(!err, "Error inserting data to database");
                return done();
            });
        });
        it("Should get the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase()
            expect().to.equal(mockPost.title);
            return done();
        });
        it("Should update the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase()
            expect().to.equal(mockPost.title);
            return done();
        });
        it("Should get the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase()
            expect().to.equal(mockPost.title);
            return done();
        });
        it("Should delete the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase()
            expect().to.equal(mockPost.title);
            return done();
        });
        it("Should handle not getting the post", (done) => {
            let mockPost = mocks.post[0];
            let createPost = new CreatePost({post: mockPost});

            createPost.savePostToDatabase()
            expect().to.equal(mockPost.title);
            return done();
        });
    });
});
