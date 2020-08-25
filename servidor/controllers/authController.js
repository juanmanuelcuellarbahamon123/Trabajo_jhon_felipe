const Usuario = require("../models/Usuario");
const bycryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req,res) => {

    const { email, password } = req.body;

    try {
        // VERIFICA SI EL EMAIL EXISTE
        let usuario = await Usuario.findOne({ email });
        if(!usuario) return res.status(400).json({ msg: 'El usuario no existe' });

        // COMPARA LA CLAVE HASH CON LA BD
        const passCorrecto = await bycryptjs.compare(password, usuario.password);
        if(!passCorrecto) return res.status(400).json({ msg: 'La contraseña es incorrecta' });

         // JWT

        const payload = {
            usuario: {
                id: usuario.id
            }
        };

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {

            if(error) throw error;

            res.json({ token: token });

        });

    } catch (error) {
        console.log(error);
    }

}

exports.usuarioAutenticado = async (req,res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json({ usuario });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error' });
    }
}