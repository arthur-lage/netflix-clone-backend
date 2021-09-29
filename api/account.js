const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const Account = require("../model/Account")

router.get("/", async (req, res) => {
    let existentAccounts = await Account.find()
    res.send(existentAccounts)
})

router.post("/register", (req, res) => {
    try {
        const name = String(req.body.name).charAt(0).toUpperCase() + String(req.body.name).slice(1)
        const email = String(req.body.email).toLowerCase()
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
    } catch (e) {
        res.send("Couldn't register account.")
        console.log(e)
    } 
})

router.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const account = await Account.find({ email })

        bcrypt.compare(password, account[0].password, (err, result) => {
            if(err){
                console.log(err)
            } else {
                if(result == false){
                    res.send("Email e/ou senha incorretos")
                } else {
                    res.send("Deu certooo")
                }
            }
        })
    } catch (e) {
        res.send("Couldn't login.")
        console.log(e)
    }
})

router.delete("/delete", async (req, res) => {
    await Account.deleteMany({})
    res.send("Deleted")
})

module.exports = router