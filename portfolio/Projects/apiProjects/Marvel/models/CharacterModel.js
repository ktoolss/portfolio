const mongoose = require('mongoose');


let characterSchema = mongoose.Schema({
    alias: {
        type: String,
        required: [true, "alias is required"]
    },
    fname: {
        type: String,
        default: "n/a"
    },
    lname: {
        type: String,
        default: "n/a"
    },
    nemesis: String,
    hero: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    },
    alive: {
        type: Boolean,
        default: true
    }
})

exports.CharacterModel = mongoose.model("KS_character", characterSchema);

