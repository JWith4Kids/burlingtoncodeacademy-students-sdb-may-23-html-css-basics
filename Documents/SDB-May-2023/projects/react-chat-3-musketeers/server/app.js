require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "127.0.0.1"

// 7.3.23(JP) - updated the routes to their specific controllers
const messageController = require("./controllers/message")
const roomController = require("./controllers/rooms")
const userController = require("./controllers/user")

// const sessionValidation = require("./middlewares/session") //
