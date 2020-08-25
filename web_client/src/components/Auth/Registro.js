import React, { useContext, useState, useEffect } from 'react';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Registro = (props) => {

    const alertaContext = useContext(AlertaContext);
    const authContext   = useContext(AuthContext);

    const { alerta, error, mostrarAlerta }                  = alertaContext;
    const { registrarUsuario, usuario, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    const [user, nuevoUser] = useState({
        nombre: '',
        email: '',
        password: '',
        verifyPassword: ''
    });

    const { nombre, email, password, verifyPassword } = user;

    const onChange = (e) => {
        nuevoUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(nombre.trim() === ''   ||
           email.trim() === ''    ||
           password.trim() === '' || 
           verifyPassword.trim() === ''
        )
        {
            mostrarAlerta('Todos los campos son obligatorios', 'alert-danger');
            return;
        }

        if(password.length < 6) {
            mostrarAlerta('La contraseña debe ser minimo de 6 caracteres' , 'alert-danger');
            return;
        }

        if(password !== verifyPassword) {
            mostrarAlerta('Las contraseñas no coinciden', 'alert-danger');
            return;
        }

        registrarUsuario({
            nombre,
            email,
            password
        });

    }

    return (
        <div className="container mt-4">
            {usuario ? <p>{usuario.nombre}</p>: null}

            <form
                onSubmit={onSubmit}
            >   
                <div className="form-group">
                    <label>Nombre: </label>
                    <input 
                        type="text"
                        name="nombre"
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Correo: </label>
                    <input 
                        type="text"
                        name="email"
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Confirmar Contraseña: </label>
                    <input
                        type="password"
                        name="verifyPassword"
                        onChange={onChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        className="btn btn-primary form-control mt-3"
                    >
                        Registrar
                    </button>
                </div>
            </form>

            {alerta ?
                <div className={`alert alert-dismissible ${error.type} mt-4`}>
                    <strong>{error.mensaje}</strong>
                </div>
            : null}

        </div>
    );
}

export default Registro;