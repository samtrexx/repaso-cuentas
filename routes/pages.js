const express = require("express");
const loggedIn = require("../controllers/loggedin")
const router = express.Router();

router.get("/", loggedIn,  (req, res) => {
  if(req.user){
      res.render("index", { status: "loggedIn", user: req.user });
  }else{
    res.render("index", { status: "no" , user: "nada"});
  }
});
router.get("/register", (req, res) => {
  res.sendFile("register.html", { root: "./public" });
});
router.get("/login", (req, res) => {
  res.sendFile("login.html", { root: "./public/" });
});

module.exports = router;