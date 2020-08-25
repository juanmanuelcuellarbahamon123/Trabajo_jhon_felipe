import React, { Fragment } from 'react'
import Navbar from '../layout/Navbar'
import FormRenta from '../layout/FormRenta';
import Features from '../layout/Features';
import RedesSociales from '../layout/RedesSociales';
import Carros from '../layout/Carros';
import Footer from '../layout/Footer';
import Styles from '../styles';

const Index = () => {
    return (
        <Fragment>
            <Navbar />

            <Styles.ContenedorFormulario>
                <FormRenta />
            </Styles.ContenedorFormulario>

            <Styles.ContenedorFeatures>
                <Features />
            </Styles.ContenedorFeatures>

            <Styles.ContenedorRedesSociales>
                <RedesSociales />
            </Styles.ContenedorRedesSociales>

            <Styles.ContenedorCarros>
                <Carros />
            </Styles.ContenedorCarros>

            <Styles.Footer>
                <Footer />
            </Styles.Footer>

        </Fragment>
    );
}

export default Index;