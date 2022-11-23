const express = require("express")
const app = express();

// Aplication Settings
app.listen(3000,"localhost",() => console.log("Start on http://localhost:3000"))

app.set("view engine","ejs")

// Aplication Middleware

app.use(express.json())

app.use(express.urlencoded({extended:false}))

const cookie = require("cookie-parser")

app.use(cookie('keyboard cat'))

const session = require("express-session")

app.use(session({resave:false, saveUninitialized:true, secret:'1234'}))

// Middleware Aplication

app.use(require("./middlewares/user"))

// Aplication Routes

app.use(require("./routes/user.routes"))

