const mongoose = require ("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    body: String,
});

const PostModel = mongoose.model("post", postSchema)

module.exports = PostModel;