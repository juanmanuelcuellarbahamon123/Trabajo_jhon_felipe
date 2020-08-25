import React, { Fragment } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitter, FaInstagramSquare } from "react-icons/fa";
import Styles from '../styles';

const RedesSociales = () => {
    return (
        <Fragment>
            <Styles.h1 className="mt-3">Nuestas Redes Sociales</Styles.h1>
            <br/>
            <Styles.AlignIcons>
                <a href="www.facebook.com">
                    <AiFillFacebook size="4rem" color="blue"/>
                </a>
            </Styles.AlignIcons>
            <Styles.AlignIcons>
                <a href="www.twitter.com">
                    <FaTwitter size="4rem" color="aqua"/>
                </a>
            </Styles.AlignIcons>
            <Styles.AlignIcons>
                <a href="www.instagram.com">
                    <FaInstagramSquare size="4rem" color="Purple" />
                </a>
            </Styles.AlignIcons>
        </Fragment>
    );
}

export default RedesSociales;