const express = require("express")
const router = express.Router()

const Account = require("../model/Account")

router.get("/", (req, res) => {
    let existentAccounts = Account.find()
    res.send(existentAccounts)
})

router.post("/register", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const newUser = {
        name: name,
        email: email,
        password: password
    }

    Account.create(newUser, function (err, result) {
        if(err){
            console.log(err)
        } else {
            res.send("Account created successfully")
        }
    })
})

router.post("/login", (req, res) => {
    
})

module.exports = router