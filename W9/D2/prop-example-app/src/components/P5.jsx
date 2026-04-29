import React, { useState } from "react";
import {userState} from "react";
//State Lifting :moving shared state up to the closest common parent
//We use this:
// Multiple child components need to share the same data
// Props drilling becomes to complex
// Child components need to update the same data

//First child component
function NameInput1({value,onChange}){
    return(
        <div>
            <label>Input 1</label>
            <input value={value}
            onChange = {(e)=>onChange(e.target.value)}
            placeholder="Type a name...."
            />
        </div>
    );
}

//Second child components

function NameInput2({value,onChange}){
    return(
        <div>
            <label>Input 2</label>
            <input value={value}
            onChange = {(e)=>onChange(e.target.value)}
            placeholder="This gets updated...."
            />
        </div>
    );
}

//Parent component
export function SharedStateParent(){
    const [name,setName] = useState('');//name is immutable
    return(
        <div>
            <h3>Shared State Demo</h3>
            <NameInput1 value={name} onChange={setName} />
            <NameInput2 value={name} onChange={setName} />

            <div>
                <strong>Current Name:</strong> {name || 'Nothing typed yet'}
            </div>
        </div>
    );
}