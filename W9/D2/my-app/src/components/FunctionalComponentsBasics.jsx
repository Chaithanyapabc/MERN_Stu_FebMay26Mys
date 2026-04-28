import React from 'react';
function Welcome(props){
    //Child component : reusable UI
    return(
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional components Basics</h2>
            {/*We are passing "Chaithanya" as props Welcome function recieves is as {name:"Chaithanya*/}
            <Welcome name="Chaithanya" />
            {/*We are passing "Chaithanya" as props Welcome function recieves is as {name:"Chaithanya*/}
            <Welcome name="Developer" />
        </div>
    )
}