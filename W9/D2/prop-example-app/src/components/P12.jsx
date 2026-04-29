// Higher ordermcomponents(HOC)
const WithBorder = (OriginalComponent) => {
    return function EnhancedComponent(props){
        return(
            <div className="setBorder">
                <OriginalComponent {...props} />
            </div>
        )
    }
}
const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

const  GreetingWithBorder = WithBorder(Greeting);

export function HOCExample(){
    return(
        <GreetingWithBorder name="Chaihanya"/>
    )
}
