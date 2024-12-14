const express = require("express");
const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const router = express.Router();

router.post("/register", register);// Ruta para registrar
router.post("/login", login);// Ruta para iniciar sesión
router.get("/logout", logout);// Ruta para cerrar sesión

module.exports = router;
