import React from "react"
// import Header from "../Header/Header.js"
// import Meme from "../meme/Meme.js"
import John from "../john/John.js"
import "./App.css"

function App(){


    // const [thingsArray,setThingsArray] = React.useState(["Thing1","Thing 2"])

    // function addItem(){
    //     setThingsArray(prevThingsArray=>{
    //         return[...prevThingsArray,`Thing ${prevThingsArray.length +1}`]
    //     })

    // }
    // const thingsElements = thingsArray.map(Thing =><p key={Thing}>{Thing}</p>)





    return (
        <div>
            {/* <Header /> */}
            {/* <Meme /> */}

            {/* <button onClick={addItem}>Add item</button>
            {thingsElements} */}
            <John />

        </div>
    )
}
export default App;