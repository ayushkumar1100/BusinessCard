const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    userId:String,
    name: String,
    email: String,
    phone: String,
    company: String,
    theme: String
})

module.exports = mongoose.model("Card",cardSchema)