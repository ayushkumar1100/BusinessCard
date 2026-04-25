const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    company: String,
    theme: String
})

module.exports = mongoose.model("Card",cardSchema)