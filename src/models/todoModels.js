const mongoose = require('mongoose');

 const todoScheme = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        trim: true,

    },
    desc: {
        type: String,
        require: true,
        trim: true
    },
    complated: {
        type: Boolean,
        default: false
    }

 },{collection: "Todo", timestamps: true})


 const todo = mongoose.model("Todo", todoScheme)
 module.exports = todo