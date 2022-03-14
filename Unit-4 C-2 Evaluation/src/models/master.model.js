let mongoose = require("mongoose");

const masterSchema = new mongoose.Schema(
    {
        balance : {type: Number, required: true},
        userID : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        branchID : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "branch",
            required: true
        },
        savingsID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "saving",
            required: false
        },
        fixedID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "fixed",
            required: false
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Master = mongoose.model("master", masterSchema);

module.exports = Master;