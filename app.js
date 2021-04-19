const express = require("express")
const app = express();
const db = require("./db/dbs")
const mongoose = require("mongoose")
require('dotenv/config')
const indexRouter = require("./routes/index")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req,res) =>{
    res.send("W")
})
app.use("/api/", indexRouter)

// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => {
//     console.log("connect")
// })

db.connect((err) => {
    if(err){
        console.log("error")
    }else{
        app.listen(3000, (err,res) => {
        })
    }
})