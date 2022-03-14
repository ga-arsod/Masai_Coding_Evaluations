let mongoose = require("mongoose");

const fixedSchema = new mongoose.Schema(
    {
        account_no : {type: String, required: true},
        balance: {type: Number, required: true},
        interestRate : {type: String, required: true},
        startDate : {type: String, required: true},
        maturityDate : {type: String, required: true},
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

const Fixed = mongoose.model("fixed", fixedSchema);

module.exports = Fixed;