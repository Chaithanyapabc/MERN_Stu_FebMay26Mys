import propTypes from "prop-types";
//Prop validation
function Profile({name,age}){
    return(
        <div className="card">
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}
Profile.propTypes = {
    name : propTypes.string.isRequired,
    age : propTypes.number.isRequired,
};
export function PropTypesDemo(){
    return(
        <>
            <Profile name="Chaithanya" age={21} />
        </>
    )
}