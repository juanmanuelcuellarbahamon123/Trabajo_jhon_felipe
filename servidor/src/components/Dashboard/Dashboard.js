import React, { Fragment ,useContext, useEffect } from 'react'
import AuthContext from '../../context/autenticacion/authContext';
import Registro from '../Auth/Registro';

const Dashboard = (props) => {

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <Fragment>
            <h1>ESTAS EN EL DASHBOARD</h1>
            <button
                onClick={() => cerrarSesion()}
            >
                Cerrar sesion
            </button>

        </Fragment>
    );
}

export default Dashboard;