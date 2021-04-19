const db = require("../db/dbs")
global.getAllEmployee = function(){
    return new Promise(resolve => {
        db.getDB().collection("employee").find({}).toArray(function(err,result){
            resolve(result)
        })
    })
}

exports.getAuthLogin = async function(req,res){
    var getEmployee = await getAllEmployee()
    console.log(getEmployee)
    res.json(getEmployee)
}