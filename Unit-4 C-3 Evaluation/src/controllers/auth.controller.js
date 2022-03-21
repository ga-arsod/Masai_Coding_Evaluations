const User = require("../models/userModel");
const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { body, validationResult } = require('express-validator');


const generateToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY);
}


const register = async(req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let user = await User.findOne({email: req.body.email});

        if(user) {
            return res.status(400).send("Email already exists");
        };

        user = await User.create(req.body);

        let token = await generateToken(user);

        return res.status(200).send({user, token});
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
};


const login = async(req, res) => {
    try{
        let user = await User.findOne({email: req.body.email});

        if(!user) {
            return res.status(400).send("Email or password is wrong");
        };

        let match = user.checkPassword(req.body.password);

        if(!match) {
            return res.status(400).send("Email or password is wrong");
        }

        let token = await generateToken(user);

        return res.status(200).send({user, token});
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
};

module.exports = {register, login};