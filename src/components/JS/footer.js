import React from 'react';
import Logo from "../../img/Pop Punk Logo Drip NO WHITE Reversed.png"
import "../styles/footer.css"


export default function footer(){
    return(
        <div className='WholeFooter'>
            <div className='FooterGrid'>
                <a href='http://localhost:3001/' className='FooterTitle'>
                <img className="FooterLogo" src={Logo} alt="Logo"/>
                    Davis-Cedrick Baseka
                </a>
                <div className='FooterSecondaryGrid'>
                    <a  href='http://localhost:3001/portfolio' className='FooterBtn'>
                        Portfolio
                    </a>
                    <a  href='http://localhost:3001/contact' className='FooterBtn'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}