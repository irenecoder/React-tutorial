import React from "react"
import Header from "../Header/Header.js"
// import Meme from "../meme/Meme.js"
import John from "../john/John.js"
import "./App.css"
import Blogs from "../../blogs"
import Body from "../Header/Body.js"


function App(){


    // const [thingsArray,setThingsArray] = React.useState(["Thing1","Thing 2"])

    // function addItem(){
    //     setThingsArray(prevThingsArray=>{
    //         return[...prevThingsArray,`Thing ${prevThingsArray.length +1}`]
    //     })

    // }
    // const thingsElements = thingsArray.map(Thing =><p key={Thing}>{Thing}</p>)
    const [user,setUser] = React.useState({
        name:"Joe",
    })

    return (
        <div>
            <Header name = {user.name}/>
            {/* <Meme /> */}
            {/* <button onClick={addItem}>Add item</button>
            {thingsElements} */}
            <Body name={user.name}/>
            <John />
            {/* <Blogs></Blogs> */}

        </div>
    )
}
export default App; 