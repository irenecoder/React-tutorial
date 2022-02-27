import React from "react"

export default function Form(){
    const [formData,setFormData] = React.useState({
        firstName:"",lastName:"",email:"",comments:"",isFriendly:true
    })
    console.log(formData)
    function handleChange(event){
        const {name, value,type,checked} = event.target
        setFormData(prevFormData=>{
            return {
                ...prevFormData,
                [name]:type ==="checkbox" ? checked:value
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
                name="firstName"
                value = {formData.firstName}></input>
                
                <input 
                type="text"
                placeholder="last name"
                onChange ={handleChange}
                name="lastName"
                value = {formData.lastName}></input>

                 <input 
                type="email"
                placeholder="email"
                onChange ={handleChange}
                name="email"
                value = {formData.email}
                ></input>

                <textarea 
                placeholder="textarea"
                onChange ={handleChange}
                name="comments"
                value = {formData.comments}
                />

                <input 
                type = "checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                />
                <br></br>
                <label htmlFor="isFriendly">Are you friendly?</label>
            </form>

        )
    }
}