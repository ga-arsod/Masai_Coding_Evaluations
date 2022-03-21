const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        body: {type: String, required: true},
        userID: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
        bookID: {type: mongoose.Schema.Types.ObjectId, ref: "book", required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;