import React from 'react';
import "../styles/footer.css"


export default function footer(){
    return(
        <div className='WholeFooter'>
            <div className='FooterGrid'>
                <a href='#' className='FooterTitle'>
                    Davis-Cedrick Baseka
                </a>
                <div className='FooterSecondaryGrid'>
                    <a  href='#'className='FooterBtn'>
                        Portfolio
                    </a>
                    <a  href='#' className='FooterBtn'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
}