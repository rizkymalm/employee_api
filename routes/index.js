const express = require("express")
const loginController = require("../controllers/login")
const indexController = require("../controllers/index")
const Router = express.Router()

Router.get("/login/auth", loginController.getAuthLogin)
Router.get("/listuser/", indexController.getListUser)
Router.post("/createuser/", indexController.postCreateUser)

module.exports = Router