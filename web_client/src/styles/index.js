import styled from 'styled-components';

const img = styled.img`
    width: 100%;
    margin-top: 1rem;
`;

const CardImg = styled.img`
    height: 200px;
    width: 100%;
    display: block
`

const ContenedorFeatures = styled.div`
    background: #333;
    padding: 80px;
`;

const ContenedorFormulario = styled.div`
    background: #444;
    padding: 40px
`;

const ContenedorRedesSociales = styled.div`
    background: #fff;
    padding: 40px;
    display: flex;
    justify-content: center;
`;

const AlignIcons = styled.div`
    display: inline-block;
    margin-left: 3rem;
`;

const ContenedorCarros = styled.div`
    background: #333;
    padding: 80px;
`;

const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    padding: 20px;
`;

const h5 = styled.h5`
    color: #fff;
    font-size: 20px;
    margin-top: 1rem;
    font-weight: bold;
    text-align: center
`;

const divIcon = styled.div`
    margin-left: 40%
`;

const h4 = styled.h4`
    color: #fff;
    font-size: 15px
    padding-bottom: 1rem
`;

const h1 = styled.h1`
    text-align: center;
`;

let featuresStyles = {
    img: img,
    CardImg: CardImg,
    ContenedorFeatures: ContenedorFeatures,
    ContenedorFormulario: ContenedorFormulario,
    ContenedorRedesSociales: ContenedorRedesSociales,
    ContenedorCarros: ContenedorCarros,
    AlignIcons: AlignIcons,
    h5: h5,
    h4: h4,
    h1: h1,
    divIcon: divIcon,
    Footer: Footer
}

export default featuresStyles;