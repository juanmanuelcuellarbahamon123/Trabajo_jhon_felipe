import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button 
                className="navbar-toggler"
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarColor01" 
                aria-controls="navbarColor01" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div 
                className="collapse navbar-collapse" 
                id="navbarColor01"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Renta de carros</Link>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <div className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                </ul>    

            </div>

        </nav>
    );
}

export default Navbar;