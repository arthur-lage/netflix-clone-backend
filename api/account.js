const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const Account = require("../model/Account")

router.get("/", async (req, res) => {
    let existentAccounts = await Account.find()
    res.send(existentAccounts)
})

router.post("/register", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const salt = 10

    bcrypt.hash(password, salt, (err, hash) => {
        if(err){
            console.log(err)
            res.send(err)
        } else {
            Account.create({name: name, email: email, password: hash}, function (err, result) {
                if(err){
                    console.log(err)
                } else {
                    res.send(result)
                }
            })
        }
    })
})

router.post("/login", (req, res) => {
    
})

router.delete("/delete", async (req, res) => {
    await Account.deleteMany({})
    res.send("Deleted")
})

module.exports = router