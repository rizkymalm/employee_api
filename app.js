const express = require("express")
const app = express();
const mongoose = require("mongoose")
require('dotenv/config')

app.get('/', (req,res) =>{
    res.send("W")
})


// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => {
mongoose.connect("", { useNewUrlParser: true}, () => {
    console.log("connect")
})


app.listen(3000)