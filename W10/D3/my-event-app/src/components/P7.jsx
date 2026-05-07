//Common form patterns
//controlled component
//A form input whose values is controlled by the React State

import { useState } from "react";

export function FormsPattern(){
    //creating a state
    const [name,setName]=useState('')
    const [submittedName,setSubmittedName] =useState('')

    //input handler
    const handleChange = (event) =>{
        setName(event.target.value)
    }

    //form submit handler
    const handleSubmit = (event) =>{
        event.preventDefault()
        setSubmittedName(name)

    }
    return(
        <section>
            <h2>Form Pattern</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
                <button type="submit">submit</button>
            </form>
            <p>Your Typed the name as: {name}</p>
            <p>Submitted : {submittedName}</p>
        </section>
    )
}