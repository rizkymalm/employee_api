const db = require("../db/dbs")
// const Cryptr = require("cryptr");
// const cryptr = new Cryptr("12345");


exports.getAuthLogin = async function(req,res){
    
    var email = req.body.email
    var pass = req.body.password
    db.getDB().collection("employee").findOne({email: email, status: 'active'}, function(err,ceklogin){
        if(err){
            res.redirect("../?error=login")
        }else{
            if(ceklogin==null){
                res.redirect("../?error=invalidemail")
            }else{
                // var decrypt = cryptr.decrypt(ceklogin.passMember)
                if(pass==ceklogin.password){
                    req.session.loggedin = true
                    req.session.email = ceklogin.emailMember
                    req.session.idmem = ceklogin.memberID
                    req.session.name = ceklogin.nameMember
                    res.redirect("../")
                }else{
                    res.redirect("../login/?error=password")
                }
            }
        }
    })
}

