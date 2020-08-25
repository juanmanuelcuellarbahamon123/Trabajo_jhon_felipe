import React, { useState } from 'react';
import Styles from '../styles';

const FormRenta = () => {

    const [fecharenta, agregarFechaRenta] = useState({
        fecha_inicio: '',
        fecha_final: ''
    });

    const onChange = (e) => {
        agregarFechaRenta({
            ...fecharenta,
            [e.target.name] : e.target.value
        });
    } 

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <form
                onSubmit={onSubmit}
            >

                <div className="row">
                    <div className="form-row col-md-6">
                        <Styles.h4>Fecha Inicio: </Styles.h4>
                        <input 
                            type="date"
                            className="form-control"
                            name="fecha_inicio"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-row col-md-6">
                        <Styles.h4>Fecha Entrega: </Styles.h4>
                        <input 
                            type="date" 
                            className="form-control"
                            name="fecha_final"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-row col-md-12 mt-4">
                        <button 
                            type="submit"
                            className="btn btn-primary form-control"
                        >
                            Buscar Vehiculos
                        </button>
                    </div>

                </div>

                

            </form>
        </div>
    );
}

export default FormRenta;