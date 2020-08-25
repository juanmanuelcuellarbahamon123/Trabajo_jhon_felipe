import React from 'react';
import Styles from '../styles';

const Carro = ({titulo, imagen}) => {
    return (
        <div className="col-md-4">
            <div class="card mb-3">

                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                </div>

                <Styles.CardImg src={imagen} />

            </div>
        </div>
    );
}

export default Carro;