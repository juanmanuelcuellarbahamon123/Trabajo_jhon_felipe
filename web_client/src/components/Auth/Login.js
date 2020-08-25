import React, { Fragment, useContext, useState, useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    const alertaContext = useContext(AlertaContext);
    const authContext   = useContext(AuthContext);

    const { alerta, mostrarAlerta }        = alertaContext;
    const { mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        if(autenticado) props.history.push('/dashboard');
        if(mensaje) mostrarAlerta(mensaje, 'alert-danger');
    }, [mensaje, autenticado, props.history]);

    const [usuario, nuevoUsuario] = useState({
        email: '',
        password: '',
    });

    const { email, password } = usuario;

    const onChange = (e) => {
        nuevoUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son olbligatorios', 'alert-danger');
        }

        iniciarSesion({
            email,
            password
        });
    } 

    return (
        <Fragment>
            <Navbar />

            <div className="container mt-4">

                <form
                    onSubmit={onSubmit}
                >   
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
                        <button
                            type="submit"
                            className="btn btn-primary form-control mt-3"
                        >
                            Ingresar
                        </button>
                    </div>
                </form>

                {alerta ?
                    <div className={`alert alert-dismissible ${alerta.type} mt-4`}>
                        <strong>{alerta.mensaje}</strong>
                    </div>
                : null}

            </div>

        </Fragment>
    );
}

export default Login;