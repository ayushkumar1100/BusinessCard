const express = require("express")
const router = express.Router()
const Card = require("../models/Card")


router.post("/card",async(req, res)=>{
    const card = new Card(req.body)
    const savedCard = await card.save()
    res.json(savedCard)
})

router.get("/card",async(req, res)=>{
    const card = await Card.findOne().sort({_id:-1})
    res.json(card)
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