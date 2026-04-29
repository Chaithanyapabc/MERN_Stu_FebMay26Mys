// Container / Wrapper Component \
// import { React } from "react";

// Children is a special React Prop
// It holds nested JSX passed between component tags 
// It helps create reusable wrapper/layout components 

function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}

// Parent Component
export function PropsChildren(){
    return(
        <>
            <Container> {/* Container hereis a inbuilt keyword*/}
                <h3>First Child element in Nested approach</h3>
            </Container>
        </>
    );
}