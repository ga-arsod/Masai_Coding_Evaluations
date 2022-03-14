const express = require("express");
const Savings = require("../models/savingAcc.model");

const router = express.Router();

router.post("", async (req, res) => {
    try{
        let savings = await Savings.create(req.body);

        return res.status(200).send(savings);
    }
    catch(err) {
        return res.status(500).send(err);
    }
})

module.exports = router;