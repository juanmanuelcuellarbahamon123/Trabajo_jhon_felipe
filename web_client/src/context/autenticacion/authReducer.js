import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types/types';

export default (state, action) => {

    switch(action.type) {

        default:
            return state;

        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
                token: localStorage.getItem('token')
            }
        
        case REGISTRO_EXITOSO:
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false,
            }

        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload,
                usuario: null,
                autenticado: false,
                cargando: false,
            }

        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                cargando: false,
            }

    }

}