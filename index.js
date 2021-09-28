const express = require("express")
const app = express()
const mongoose = require("mongoose")
const account = require("./api/account")

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/account", account)

app.listen(PORT, () => console.log("Listening to port: " + PORT))