import React from "react"
import Star from "./Star.js"

function John(){
    const [contact, setContact] = React.useState({
        firstName:"John",
        lastName:"Doe",
        phone:"+1 (719) 555-1212",
        email:"johndoe@gmail.com",
        isFavourite:false
    })
    // let starIcon = contact.isFavourite ? "./images/star.jpeg":"./images/pink.png"
    function toggleFavourite(){
        setContact(prevContact=>{
            return{...prevContact,
                isFavourite:!prevContact.isFavourite

            }

        })
    }
    
    return(
        <main>
            <article className="card">
                <img src="./images/charlo.webp" alt=""className="card-image"></img>
                <div className="card-info">
                    <Star isFilled = {contact.isFavourite}handleClick = {toggleFavourite} />
                    
                    <h2 className="card-name">{contact.firstName}{contact.lastName}</h2>
                    <p className="card-contact">{contact.phone}</p>
                    <p className="card-contact">{contact.email}</p>

                </div>

            </article>
        </main>
    )

}
export default John

