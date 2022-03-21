const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        bookID: {type: mongoose.Schema.Types.ObjectId, ref: "book", required: true},
        userID: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;