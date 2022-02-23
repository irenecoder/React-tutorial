import React from "react"

export default function Body(props){
    const user = props.name
    return(
        <section>
            <h1>Welcome back,{user}</h1>
        </section>
    )
}