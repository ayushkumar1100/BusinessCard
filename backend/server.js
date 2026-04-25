const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use("/api", authRoutes)

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/digitalCard")
        console.log("MongoDB Connected")
    } catch (error) {
        console.log(error)
    }
}

connectDB()

const cardRoutes = require("./routes/cardRoutes")
app.use("/api",cardRoutes)

app.listen(3000)