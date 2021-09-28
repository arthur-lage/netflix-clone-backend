const express = require("express")
const app = express()
const mongoose = require("mongoose")
const account = require("./api/account")

require("dotenv").config()

const dbPassword = process.env.DB_PASSWORD
const mongooseURI = `mongodb+srv://admin:${dbPassword}@cluster0.8l9zr.mongodb.net/netflix-clone?retryWrites=true&w=majority`

mongoose.connect(mongooseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(e => console.log(e))

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/account", account)

app.listen(PORT, () => console.log("Listening to port: " + PORT))