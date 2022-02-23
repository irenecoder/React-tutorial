import React from "react"
// import Header from "../Header/Header.js"
// import Meme from "../meme/Meme.js"
// import John from "../john/John.js"
import "./App.css"
// import Blogs from "../../blogs"
// import Body from "../Header/Body.js"
import data from "../Boxes/data.js"
import Boxes from "../Boxes/Boxes.js"



function App(props){


    // const [thingsArray,setThingsArray] = React.useState(["Thing1","Thing 2"])

    // function addItem(){
    //     setThingsArray(prevThingsArray=>{
    //         return[...prevThingsArray,`Thing ${prevThingsArray.length +1}`]
    //     })

    // }
    // const thingsElements = thingsArray.map(Thing =><p key={Thing}>{Thing}</p>)
    // const [user,setUser] = React.useState({
        // name:"Joe",
    // })
    const [squares,setSquares] = React.useState(data)

    // return (
    //     <div>
    //         <Header name = {user.name}/>
    //         {/* <Meme /> */}
    //         {/* <button onClick={addItem}>Add item</button>
    //         {thingsElements} */}
    //         <Body name={user.name}/>
    //         {/* <John /> */}
    //         {/* <Blogs></Blogs> */}

    //     </div>
    // )
    // props.darkMode
    const squareElements = squares.map(square=>(
        <Boxes key={square.id} on={square.on}/>
    ))
    
    return(
        <main>
            {squareElements}
        </main>
    )
   
    
}
export default App; 