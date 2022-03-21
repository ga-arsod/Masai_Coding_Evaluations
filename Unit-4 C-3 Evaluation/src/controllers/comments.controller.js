const express = require("express");
const Comment = require("../models/commentModel");

const router = express.Router();

router.post("", async(req, res) => {
    try{
        const comment = await Comment.create(req.body).populate({userID, bookID});

        return res.status(200).send(comment);
    }
    catch(err) {
        return res.status(400).send({error: err});
    }
});

module.exports = router;