// Props immutable
//Notification count
function Child({ message }){
    //10
    //20
    message="Changed message"
    return <p>Recieved message: {message}</p>
}

export function PropsImmutablity(){
    const parentMessage = "Props are read-only";
    return(
        <>
            <h2>Props are immutable.</h2>
            <Child message={parentMessage}/>
        </>
    )
}