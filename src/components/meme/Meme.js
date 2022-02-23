import React from "react" 
import "./meme.css"
import memesData from "./memesData.js"


function Meme(){
    // const [memeImage,setMemeImage]= React.useState("")
    const [meme,setMeme] =React.useState({
        "topText":"I like it",
        "bottomText":"Like that",
        "randomImage":"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         const url = memesArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }
    return(
        <main>
            <div className="form"> 
                <input 
                    type="text"placeholder={meme.topText} className="form-input"></input>
                <input 
                    type="text"placeholder={meme.bottomText} className="form-input"></input>
                <button className="form-button" onClick={getMemeImage}>Get a new meme</button>
                <img src={meme.randomImage} alt="meme-logo"className="meme-image"></img>

            </div>

        </main>

    )
    
}
export default Meme;