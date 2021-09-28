const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello")
})

router.post("/register", (req, res) => {
    
})

router.post("/login", (req, res) => {
    
})

module.exports = router