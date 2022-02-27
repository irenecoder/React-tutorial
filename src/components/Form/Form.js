import React from "react"

export default function Form(){
    const [formData,setFormData] = React.useState({
        firstName:"",lastName:"",email:""
    })
    console.log(formData)
    function handleChange(event){
        setFormData(prevFormData=>{
            return {
                ...prevFormData,[event.target.name]:event.target.value,
            }   
        }
        )
    }
    {
        return(
            <form>
                <input 
                type="text"
                placeholder="first name"
                onChange ={handleChange}
                name="firstName"></input>
                <input 
                type="text"
                placeholder="last name"
                onChange ={handleChange}
                name="lastName"></input>
                 <input 
                type="email"
                placeholder="email"
                onChange ={handleChange}
                name="email"></input>
            </form>

        )
    }
}