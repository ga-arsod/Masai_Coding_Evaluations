const express = require("express");
const Master = require("../models/master.model");

const router = express.Router();

router.get("", async (req, res) => {
    try{
        let master = await Master.find({}).lean().exec();

        return res.status(200).send(master);
    }
    catch {
        return res.status(500).send(err);
    }
});


router.get("/:id", async(req, res) => {
    try{
        let master = await Master.findById({_id: req.params.id}).populate({savingsID: {account_no: 1, balance: 1}}).populate({fixedID: {account_no: 1, balance: 1}}).lean().exec();

        return res.status(200).send(master);
    }
    catch {
        return res.status(500).send(err);
    }
})

module.exports = router;