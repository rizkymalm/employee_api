const db = require("../dbs");

global.getAllEmployee = function(){
    return new Promise(resolve => {
        db.getDB().collection("employee").find({}).toArray(function(err,result){
            resolve(result)
        })
    })
}