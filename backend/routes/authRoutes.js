const express = require("express")
const router = express.Router()
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
    const { email, password } = req.body

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !password) {
        return res.status(400).json({ message: "All fields required" })
    }

    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: "Invalid email format" })
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters" })
    }

    const existing = await User.findOne({ email })
    if (existing) {
        return res.json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
        email,
        password: hashedPassword
    })
    await user.save()

    res.json({ message: "User created successfully" })
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "All fields required" })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({ message: "Invalid login" })
    }

    
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(401).json({ message: "Invalid login" })
    }

    const token = jwt.sign(
        { userId: user._id },
        "secretkey123",
        { expiresIn: "1d" }
    )

    res.json({
        message: "Login successful",
        token
    })
})

module.exports = router