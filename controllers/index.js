require("../db/models/user.model")
exports.getListUser = async function(req,res){
    var getEmployee = await getAllEmployee()
    res.send(getEmployee)
}

exports.postCreateUser = async function(req,res){
    var userName = req.body.username
    var firstName = req.body.firstname
    var lastName = req.body.lastname
    var insertJson = [{
        username: userName,
        firstname: firstName,
        lastname: lastName
    }]
    db.getDB().collection("employee").insert(insertJson, function(err,result){
        if(!err){

        }
    })
}