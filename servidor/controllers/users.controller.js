const Usuario = require("../models/users.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const SECRET = process.env.SECRET_KEY

module.exports = {
    registrarUsuario: async (req, res) => {
        try {
            const nuevoUsuario = await Usuario.create(req.body)
            const userToken = jwt.sign({ _id: nuevoUsuario._id }, SECRET)
            res.status(201).cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + 9000) })
                .json({ successMessage: "Usuario Registrado", user: nuevoUsuario })
        } catch (error) {
            console.log("error em el controller 1")
            res.status(401).json(error);
        }
    },
    loginUsuario: async (req, res) => {
        const usuario = await Usuario.findOne({email:req.body.email})
        console.log("Usuario",usuario )
        if (!usuario){
            res.status(400).json({error: "Email/Password invalido"})
            console.log("Email/Password invalido")
        }
        try {
            const passwordValida= await bcrypt.compare(req.body.password, usuario.password)
            if(!passwordValida){
                res.status(400).json({error: "Email/Password invalido"})
            }else{
                const userToken = jwt.sign({ _id: usuario._id }, SECRET)
                console.log("Pass valida", userToken)
                res.status(201).cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + 9000) }).json({ successMessage: "Usuario Registrado", user: usuario })
                
            }
        } catch (error) {
            console.log("error en el controller")
            res.status(400).json(error);
        }
    }
}