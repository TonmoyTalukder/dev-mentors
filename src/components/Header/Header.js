import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div>
            <h2 className="font-monospace fst-italic fs-1 bg-secondary text-light"> <img className="logo" src={logo} alt="" />  Welcome to Dev Mentors'</h2>
        </div>
    );
};

export default Header;