import React from "react"
import "./Header.css"


function Header(){
    return(
        <div className="header">
            <img src="./images/troll.png" alt="logo" className="meme--logo"></img>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React project-3</h4>
        </div>
    )
}
export default Header;