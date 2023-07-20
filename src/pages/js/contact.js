import React from 'react';
import "../css/contact.css"
// import BGImage from "../../img/Drip_Logo_Pattern.jpg"

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
        </div>
    )
}
