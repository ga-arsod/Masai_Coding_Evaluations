let mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema(
    {
        account_no : {type: String, required: true},
        balance: {type: Number, required: true},
        interestRate : {type: String, required: true},
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
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Savings = mongoose.model("saving", savingsSchema);

module.exports = Savings;