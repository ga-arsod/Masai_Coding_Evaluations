let mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName : {type: String, required: true},
        middleName : {type: String, required: false},
        lastName : {type: String, required: true},
        age : {type: Number, required: true},
        email: {type: String, required: true},
        adress: {type: String, required: true},
        gender : {type: String, required: true},
        type : {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;