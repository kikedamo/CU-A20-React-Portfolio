import React from 'react';
import "../css/portfolio.css"
import MusicPort from "../../img/sleep_less.jpeg"
import Video from "../../videos/Glitch Logo Intro Video .mov"
import SandCastle from"../../img/sand_castle.svg"

export default function contact(){
    return(
        <div className="WholePort">
            <div className="PortTitle">
                My Portfolio
            </div>
            <div className="Portfolio">
                <a href="https://open.spotify.com/track/50UbZhJ16iyVeZJn0EJ6EO?si=7187680f40564b25" className="card">
                    <img className="MusicImg" src={MusicPort} alt="Music Portfolio"/>
                    <h3 className="CardDesc">
                        Musical Project
                    </h3>
                </a>
                <a href="https://kikedamo.github.io/CU-A2-Portfolio/" className="card">
                <video className="CardVid" src={Video} autoPlay muted loop></video>
                    <h3 className="CardDesc">
                        HTML/CSS Project
                    </h3>
                </a>
                <a href="https://coding-empire-conference.herokuapp.com/" className="card">
                    <img className="SCImg" src={SandCastle} alt="Sand Castle"/>
                    <h3 className="CardDesc">
                        Code Empire Conference
                    </h3>
                </a>
            </div>
        </div>
    )
}