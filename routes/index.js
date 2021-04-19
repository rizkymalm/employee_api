const express = require("express")
const loginController = require("../controllers/login")
const Router = express.Router()

Router.get("/login/auth", loginController.getAuthLogin)

module.exports = Router