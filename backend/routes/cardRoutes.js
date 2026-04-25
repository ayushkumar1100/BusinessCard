const express = require("express")
const router = express.Router()
const Card = require("../models/Card")


router.post("/card",async(req, res)=>{
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.company) {
    return res.status(400).json({ message: "All fields required" })
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