let mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        name : {type: String, required: true},
        adress: {type: String, required: true},
        ifsc : {type: String, required: true},
        micr : {type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Branch = mongoose.model("branch", userSchema);

module.exports = Branch;