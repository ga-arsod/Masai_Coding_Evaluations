const express = require("express");
const Book = require("../models/bookModel");

const router = express.Router();

router.post("", async(req, res) => {
    try{
        const page = req.query.page || 1;
        const limit = req.query.pageSize || 10;

        const offset = (page - 1) * limit;

        const book = await Book.create({
            likes: req.body.likes,
            coverImage: req.file,
            content : req.body.content,
            publicationID: req.body.publicationID
        }).skip(offset).limit(limit);

        return res.status(200).send(book);
    }
    catch(err) {
        return res.status(400).send({error: err});
    }
});

module.exports = router;