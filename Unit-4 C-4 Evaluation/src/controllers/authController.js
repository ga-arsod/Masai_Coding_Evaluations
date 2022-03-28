const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/userModel");

const generateToken = (user) => {
    return jwt.sign({user}, process.env.KEY);
};

const register = async(req, res) => {
    try{
        let user = await User.findOne({email: req.body.email}).lean().exec();

        if(user) {
            return res.status(400).send({message: "Email Already exists"});
        };

        user = await User.create(req.body);

        let token = generateToken(user);
        return res.status(200).send({user : user,
             token: token});
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
};


const login = async(req, res) => {
    try{
        let user = await User.findOne({email: req.body.email}).lean().exec();

        if(!user) {
            return res.status(400).send({message: "Wrong Email or Password"});
        };

        let match = await User.checkPassword(req.body.password);

        if(!match) {
            return res.status(400).send({message: "Wrong Email or Password"});
        }

        let token = generateToken(user);
        return res.status(200).send({user : user,
            token: token});
    }
    catch(err) {
        return res.status(400).send({error: err.message});
    }
};


module.exports = {register, login};