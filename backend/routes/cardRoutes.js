const express = require("express")
const router = express.Router()
const Card = require("../models/Card")
const auth = require("../middleware/auth")


router.post("/card",auth, async(req, res)=>{

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
        name,
        email,
        phone,
        company,
        theme: req.body.theme,
        userId: req.userId
    })
    const savedCard = await card.save()
    res.json(savedCard)
})

router.get("/card",auth, async(req, res)=>{
    const cards = await Card.find({userId:req.userId})
    res.json(cards)
})

router.get("/card/:id", async(req, res)=>{
    const card = await Card.findById(req.params.id)

    if (!card) {
        return res.status(404).json({ message: "Card not found" })
    }

    if (card.userId.toString() !== req.userId) {
        return res.status(403).json({ message: "Unauthorized" })
    }

    res.json(card)
})

router.put("/card/:id", auth, async(req, res)=>{

    const card = await Card.findById(req.params.id)

    if (!card) {
        return res.status(404).json({ message: "Card not found" })
    }

    if (card.userId.toString() !== req.userId) {
        return res.status(403).json({ message: "Unauthorized" })
    }

    const updatedCard = await Card.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: "after" }
    )

    res.json(updatedCard)
})

router.delete("/card/:id", auth, async(req, res)=>{

    const card = await Card.findById(req.params.id)

    if (!card) {
        return res.status(404).json({ message: "Card not found" })
    }

    if (card.userId.toString() !== req.userId) {
        return res.status(403).json({ message: "Unauthorized" })
    }

    await Card.findByIdAndDelete(req.params.id)

    res.json({ message: "Card deleted" })
})



module.exports = router