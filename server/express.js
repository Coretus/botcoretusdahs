const express = require("express");
const session = require("express-session");
const hbs = require("express-handlebars");
const passport = require("./passport");
const BotClient = require("../index");
const path = require("path");
const app = express();

app
  .set("port", process.env.PORT || 3000)
  .use(express.static("public"))
  .use(
    session({
      secret: "dashboardfeliz",
      resave: false,
      saveUninitialized: false,
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .set("views", path.join(__dirname, "../views"))
  .set("view engine", ".ejs")
  .engine(".ejs", hbs({ extname: ".ejs" }))
  .use((req, res, next) => {
    req.BotClient = BotClient;
    next();
  })
  .use("/", require("../routes/routes"));

module.exports = app;
