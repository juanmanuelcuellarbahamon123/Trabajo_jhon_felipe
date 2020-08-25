const Usuario = require("../models/Usuario");
const bycryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.crearUsuaurio = async (req,res) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        if(usuario) return res.status(400).json({ msg: 'El usuario ya existe' });

        usuario = new Usuario(req.body);

        // HASH

        const salt = await bycryptjs.genSalt(10);
        usuario.password = await bycryptjs.hash(password, salt);

        usuario.save();

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
        res.status(400).json({ msg: 'Hubo un error' });
    }
}