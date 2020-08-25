import React from 'react';
import Carro from './Carro';

const Carros = () => {
    return (
        <div className="container">
            <div className="row">
                <Carro 
                    titulo="Carros economicos"
                    imagen="https://unautoporelmundo.com/wp-content/uploads/2020/07/chevrolet-uno-de-los-carro-m%C3%A1s-economicos-del-2020-baratos-nuevos-5.jpg"
                />
                <Carro 
                    titulo="Camionetas"
                    imagen="https://www.hoydiariodelmagdalena.com.co/wp-content/uploads/2020/04/compra-de-camionetas.jpg"
                />
                <Carro 
                    titulo="Carros de lujo"
                    imagen="https://i2.wp.com/3.bp.blogspot.com/-EBvoPTfhpMA/UdOLPq2QxgI/AAAAAAAAAB4/reH8vsGRW_Y/s450/carros%2Bde%2Blujo%2B(5).jpg"
                />
            </div>
        </div>
    );
}

export default Carros;