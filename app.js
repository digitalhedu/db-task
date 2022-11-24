const express = require("express");
const app = express();

// Aplication Settings
app.listen(3000, "localhost", () =>
  console.log("Start on http://localhost:3000")
);

app.set("view engine", "ejs");
app.set("views", "./views");

// Aplication Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const method = require("method-override");

app.use(method("m"));

const cookie = require("cookie-parser");

app.use(cookie("something"));

const session = require("express-session");

app.use(session({ resave: false, saveUninitialized: true, secret: "dh task" }));

//  Aplication Middleware Custom

app.use(require("./middlewares/user"));

// Aplication Routes

app.use(require("./routes/user.routes"));

app.use("/tasks", require("./routes/task.routes"));
