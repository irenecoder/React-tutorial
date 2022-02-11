import React from "react"

function John(){
    const [contact, setContact] = React.useState({
        firstName:"John",
        lastName:"Doe",
        phone:"+1 (719) 555-1212",
        email:"johndoe@gmail.com",
        isFavourite:false
    })
    function toggleFavourite(){
        console.log("Toggle Favourite")
    }
   

    return(
        <main>
            <article className="card">
                <img src="./images/troll.png" className="card-image"></img>
                <div className="card-info">
                    <img src="./images/troll.png"className="card-favourite"onClick={toggleFavourite}>
                    </img>
                    <h2 className="card-name">{contact.firstName}{contact.lastName}</h2>
                    <p className="card-contact">{contact.phone}</p>
                    <p className="card-contact">{contact.email}</p>

                </div>

            </article>
        </main>
    )

}
export default John

