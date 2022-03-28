
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
    return new Promise ((resolve, reject) => {
        jwt.verify(token, process.env.KEY, (err, decoded) => {

            if(err) return reject(err);

            return resolve(decoded);
        });
    });
};

const authenticate = async(req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(400).send("Token not found");
    };

    if(!req.headers.authorization.startswith("Bearer ")) {
        return res.status(400).send("Token not found");
    };

    let token = req.headers.authorization.trim().split(" ")[1];

    let decoded;

    try {
        decoded = await verifyToken(token);
    }
    catch(err) {
        return res.status(400).send(err);
    };

    req.user = decoded.user;
    next();
};

module.exports = authenticate;