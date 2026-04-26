const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/register", async (req, res) => {
    const { email, password } = req.body

    // 🔍 check if user exists
    const existing = await User.findOne({ email })

    if (existing) {
        return res.json({ message: "User already exists" })
    }

    // ✅ create new user
    const user = new User({ email, password })
    await user.save()

    res.json({ message: "User created successfully" })
})

router.post("/login", async(req, res)=>{
    const{email, password} = req.body

    const user = await User.findOne({email, password})

    if(!user){
        return res.json({message: "Invalid credentials"})
    }

    res.json(user)
})

module.exports = router