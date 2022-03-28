const express = require("express");
const {register, login} = require("./controllers/authController");
const todoController = require("./controllers/todoController");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("/todos", todoController);

module.exports = app;