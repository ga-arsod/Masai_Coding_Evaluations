const express = require("express");
const Fixed = require("../models/fixedAcc.model");

const router = express.Router();

router.post("", async (req, res) => {
    try{
        let fixed = await Fixed.create(req.body);

        return res.status(200).send(fixed);
    }
    catch(err) {
        return res.status(500).send(err);
    }
})


router.delete("/:id", async (req, res) => {
    try{
        let interest = await Fixed.findById({_id : req.params.id, interestRate: 1});

        let maturity = await Fixed.findById({_id : req.params.id, maturityDate: 1});

        let balance = await Fixed.findById({_id : req.params.id, balance: 1});

        balance = balane + ((maturity/100) * interest);

        let fixed = await Fixed.findByIdAndDelete({_id : req.params.id});

        return res.status(200).send(fixed);
    }
    catch(err) {
        return res.status(500).send(err);
    }
})

module.exports = router;