const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
    {
        name: {type: mongoose.Schema.Types.ObjectId, ref: "post"},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Publication = mongoose.model("publication", publicationSchema);

module.exports = Publication;