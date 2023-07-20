import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import Logo from "../../img/Pop Punk Logo Drip NO WHITE Reversed.png"


export default function navbar(){
    return(
        <div className='WholeNavBar'>
            <div className='NavbarGrid'>
                <Link className='NavbarTitle' to={`/`}>
                    <img className="MainLogo" src={Logo} alt="Logo"/>
                    Davis-Cedrick Baseka
                </Link>
                <Link className='NavbarBtn' to={`/portfolio`}>
                    Portfolio
                </Link>
                <Link className='NavbarBtn' to={`/contact`}>
                    Contact
                </Link>
            </div>
        </div>
    );
}