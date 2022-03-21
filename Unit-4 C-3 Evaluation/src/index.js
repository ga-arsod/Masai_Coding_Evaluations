const express = require("express");
const { body, validationResult } = require('express-validator');

const {register, login} = require("./controllers/auth.controller");
const bookController = require("./controllers/book.controller");

const app = express();

app.use(express.json());

app.post("/register",
body("firstName")
    .not()
    .isEmpty()
    .withMessage("First Name cannot be empty")
    .custom((value) => {
        let words = /{3,30}/
        if(!value.match(words)) {
            throw new Error("FirstName cannot be less than 3 or more than 30 words")
        };
        return true;
    }),
body("lastName")
    .custom((value) => {
        let words = /{3,30}/
        if(!value.match(words)) {
            throw new Error("FirstName cannot be less than 3 or more than 30 words")
        };
        return true;
    }),
body("age")
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .custom((value) => {
        if(value < 1 || value > 150) {
            throw new Error("Age should be between 1 to 150")
        };
        return true;
    }),
body("email")
    .isEmail()
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty"),
register);

app.post("/login", login);

app.use("/books", bookController);

module.exports = app;