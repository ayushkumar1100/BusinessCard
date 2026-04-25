const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/register", async(req, res)=>{
    const user = new User(req.body)
    await user.save()
    res.json(user)
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