import React from 'react';
import "../css/home.css"
import Profile from "../../img/A086CD4B-18BB-4B51-9842-4CBD6E30715E.jpg"


export default function home(){
    return(
        <div className="WholeHome">
            <div className="HomeTitle">
                About Me
            </div>
            <img className="ProfileImg" src={Profile} alt="Profile Picture"/>
            <div className="HomeDesc">
            Hello World! My name is Davis-Cedrick Baseka. I'm a 24 years old upcoming web/app developper. I've come from a artistic background (being a professional touring musician, photograph, video editor, etc.)
            </div>
        </div>
    )
}