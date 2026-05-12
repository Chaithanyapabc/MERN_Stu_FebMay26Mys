// Optional parameters
import { useParams } from "react-router-dom"

export function OperationalParameters(){
    const { username } = useParams();

    return(
        <div>
            <h2>Operational Parameters</h2>
            { username ? (
                <p>Hello, { username }</p>
            ):(<p>Hello, User</p>)}
            <p></p>
        </div>
    );
}