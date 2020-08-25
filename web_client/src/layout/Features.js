import React from 'react'
import Styles from '../styles';
import { BsFillChatFill, BsFillPersonCheckFill, BsFillDisplayFill } from "react-icons/bs";
import { GiPriceTag } from 'react-icons/gi';

const Features = () => {
    return (    
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Styles.img src="https://www.elcarrocolombiano.com/wp-content/uploads/2019/09/20190930-TOP-100-LOS-CARROS-MAS-VENDIDOS-DEL-MUNDO-ENTRE-ENERO-Y-JULIO-DE-2019-01-750x460.jpg" />
                </div>
                <div className="col-md-7 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <Styles.divIcon>
                                <BsFillChatFill size="4rem" color="white" />
                            </Styles.divIcon>
                            <Styles.h5>Estamos atentos a todos nuestros usuarios</Styles.h5>
                        </div>
                        <div className="col-md-6">
                            <Styles.divIcon>
                                <GiPriceTag size="4rem" color="white"/>
                            </Styles.divIcon>
                            <Styles.h5>Ofrecemos precios justos y de calidad</Styles.h5>
                        </div>
                        <div className="col-md-6">
                            <Styles.divIcon>
                                <BsFillPersonCheckFill size="4rem" color="white"/>
                            </Styles.divIcon>
                            <Styles.h5>Ofrecemos el mejor servicio con la ultima tecnologia del mercado</Styles.h5>
                        </div>
                        <div className="col-md-6">
                            <Styles.divIcon>
                                <BsFillDisplayFill size="4rem" color="white"/>
                            </Styles.divIcon>
                            <Styles.h5>Estamos atentos a todas las peticiones de nuestros clientes</Styles.h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;