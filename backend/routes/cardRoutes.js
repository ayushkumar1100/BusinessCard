const express = require("express")
const router = express.Router()
const Card = require("../models/Card")


router.post("/card",async(req, res)=>{

    const { name, email, phone, company } = req.body

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^[0-9]{10}$/

    if (!name || !email || !phone || !company) {
        return res.status(400).json({ message: "All fields required" })
    }

    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: "Invalid email format" })
    }

    if (!phonePattern.test(phone)) {
        return res.status(400).json({ message: "Phone must be 10 digits" })
    }


    
    const card = new Card({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        theme:req.body.theme,
        userId:req.body.userId
    })
    const savedCard = await card.save()
    res.json(savedCard)
})

router.get("/card/:userId",async(req, res)=>{
    const cards = await Card.find({userId:req.params.userId})
    res.json(cards)
})

router.get("/card/:id", async(req, res)=>{
    const card = await Card.findById(req.params.id)
    res.json(card)
})

router.put("/card/:id", async(req, res)=>{
    const updatedCard = await Card.findByIdAndUpdate(
        req.params.id,
        req.body,
        {returnDocument: "after"}
    )
    res.json(updatedCard)
})

router.delete("/card/:id",async(req, res)=>{
    await Card.findByIdAndDelete(req.params.id)
    res.json({message: "Card deleted"})
})



module.exports = router