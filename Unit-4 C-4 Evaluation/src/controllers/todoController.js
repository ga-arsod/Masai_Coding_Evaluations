const express = require("express");
const Todo = require("../models/toDoModel");
const authenticate = require("../middleware/authenticate");

const router = express.Router();

router.get("", authenticate, async(req, res) => {
    try{
        const user = await Todo.find({}).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});

router.post("", authenticate, async(req, res) => {
    try{
        req.body.userId = req.user._id;
        const user = await Todo.create(req.body);

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});

router.get("/:id", authenticate, async(req, res) => {
    try{

        if(req.params.id != req.user._id) {
            throw new Error ("You are not allowed to perform this action");
        }

        const user = await Todo.find({}).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});

router.get("/:id", authenticate, async(req, res) => {
    try{

        if(req.params.id != req.user._id) {
            throw new Error ("You are not allowed to perform this action");
        }

        const user = await Todo.find({}).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});


router.get("/:id", authenticate, async(req, res) => {
    try{

        if(req.params.id != req.user._id) {
            return res.status(401).send("You are not allowed to perform this action")
        }

        const user = await Todo.find({}).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});

router.patch("/:id", authenticate, async(req, res) => {
    try{

        if(req.params.id != req.user._id) {
            return res.status(401).send("You are not allowed to perform this action")
        }

        const user = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});


router.delete("/:id", authenticate, async(req, res) => {
    try{

        if(req.params.id != req.user._id) {
            return res.status(401).send("You are not allowed to perform this action")
        }

        const user = await Todo.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(200).send(user);
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
});

module.exports = router;