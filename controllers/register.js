const { response } = require("express");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { email, password:Npassword } = req.body;
 
    if (!email || !Npassword) return res.json({ status: "error", message: "Todos los campos son obligatorios" });
      else{
        //prueba de coneccion loggedin
        //console.log(email);

        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if(result[0])return res.json({status: "error", error: "Usuario ya registrado"})
                else{
                    //Hash de contraseña
                    const password = await  bcrypt.hash(Npassword, 8);
                    //console.log(password); //Prueba loggedIN
                    db.query('INSERT INTO users SET ?', {email: email,password: password}, (error, results) =>{
                        if(error) throw error; 
                        return res.json({ status: "success", success: "Usuario se ha regitrado"})

                    } )
                }
                })
      }
}
module.exports = register;
