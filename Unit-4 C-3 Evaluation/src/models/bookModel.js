const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        likes: {type: integer, default: 0},
        coverImage: {type: String, required: true},
        content: {type: String, required: true},
        publicationID: {type: mongoose.Schema.Types.ObjectId, ref: "publication", required: true}
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;