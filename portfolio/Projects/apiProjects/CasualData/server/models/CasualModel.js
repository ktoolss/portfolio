const mongoose = require('mongoose');


let casualSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    fname: String,
    lname: String,
    city: String,
    Address: String,
    createdOn: {
        type: Date,
        default: Date.now()
    },
    alive: Boolean
})

exports.CasualModel = mongoose.model("KS_casual", casualSchema);

