import React from 'react';
import "../css/contact.css"
import Facebook from "../../img/fb.svg"
import Instagram from "../../img/ig.svg"

export default function contact(){
    return(
        <div className="wholeContact">
            {/* <img className="BGPattern" src={BGImage}/> */}
            <div className="ContactTitle">
                Contact Me Here
            </div>
            <div className="InputArea">
                <div>Full Name:</div>
                <input type="text" placeholder="Name"/>
                <div>Email:</div>
                <input type="email" placeholder="Email"/>
                <div>Message:</div>
                <textarea type="text" placeholder="Message"/>
                <button type="submit" className="InputBtn">
                    Submit
                </button>
            </div>
            <div className="Socials">
                <h2 className="SocialTitle">
                    My Socials
                </h2>
                <div  className="SocialLinks">
                    <a href="https://facebook.com/Cedrick038/" className="SocialFB">
                        <img src={Facebook} alt="Facebook Logo" className="FBLogo"/>
                    </a>
                    <a href="https://www.instagram.com/imdaviscedrick/" className="SocialIG">
                        <img src={Instagram} alt="Instagram Logo" className="IGLogo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
