import React from "react"

export default function Form(){
    const [formData,setFormData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly:true,
        employment:"",
        favColor:"",
    })
    console.log(formData.employment)
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
    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)
    }
    {
        return(
            <form onSubmit={handleSubmit}>
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
                onChange ={handleChange}
                checked={formData.isFriendly}
                />
                <br></br>
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                <fieldset>
                    <legend>Current employment status</legend>

                    <input
                    type="radio"
                    id="unemployed" 
                    name="employment"
                    value="unemployed"
                    onChange ={handleChange}
                    checked={formData.employment ==="unemployed"}
                    />

                    <label htmlFor="unemployed">Unemployed</label>

                    <input
                    type="radio"
                    id="part-time" 
                    name="employment"
                    value="part-time"
                    onChange ={handleChange}
                    checked={formData.employment ==="part-time"}
                    />

                    <label htmlFor="part-time">part-time</label>

                    <input
                    type="radio"
                    id="full-time" 
                    name="employment"
                    value = "full-time"
                    onChange ={handleChange}
                    checked={formData.employment ==="full-time"}
                    />

                    <label htmlFor="full-time">full-time</label>
                </fieldset>
                <br />

                <label htmlFor="favColor"> what is your favourite color? </label>
                <br />
                <select id="favColor"
                        value={formData.favColor}
                        name="favColor"
                        onChange={handleChange}
                        >
                    <option value="">--choose--</option>        
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>

                </select>
                <br />
                <button >submit</button>
            </form>

        )
    }
}