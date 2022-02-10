import React from "react" 
import "./meme.css"
import memesData from "./memesData.js"


function Meme(){
    const [memeImage,setMemeImage]= React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>
            <div className="form"> 
                <input 
                    type="text"placeholder="top text" className="form-input"></input>
                <input 
                    type="text"placeholder="bottom text" className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>Get a new meme</button>
                <img src={memeImage} alt="meme-logo"className="meme-image"></img>

            </div>

        </main>

    )
    
}
export default Meme;