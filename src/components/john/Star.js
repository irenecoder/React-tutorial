import React from "react"

export default function Star(props){
   const starIcon = props.isFilled ? "star.jpeg":"pink.png"
    return(
        <img src={'./images/${starIcon}'} alt=""className="card-favourite" onClick={props.handleClick}></img>

    )
    


}