const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")
const connectDB = require("./db/db.js")
const dotenv = require("dotenv");
dotenv.config()
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use("/api", authRoutes)


connectDB()

const cardRoutes = require("./routes/cardRoutes")
app.use("/api",cardRoutes)

app.listen(process.env.PORT || 3000)