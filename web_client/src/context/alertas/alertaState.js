import React, { useReducer } from 'react';
import AlertaContext from './alertaContext';
import AlertaReducer from './alertaReducer';
import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../../types/types';

const AlertaState = (props) => {

    const initialState = {
        alerta: null,
    }

    const [ state, dispatch ] = useReducer(AlertaReducer, initialState)

    const mostrarAlerta = (mensaje, type) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                mensaje,
                type
            }
        });
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 5000);
    }

    return (
        <AlertaContext.Provider
            value={{
                alerta: state.alerta,
                error: state.error,
                mostrarAlerta
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    );

}

export default AlertaState;