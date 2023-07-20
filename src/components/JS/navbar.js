import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"


export default function navbar(){
    return(
        <div className='WholeNavBar'>
            <div className='NavbarGrid'>
                <Link className='NavbarTitle' to={`/`}>
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