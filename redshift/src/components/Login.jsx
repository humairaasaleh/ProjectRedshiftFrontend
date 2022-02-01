import { useState } from "react";
const Login = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
let tempUser;
let tempPassword;

    return ( 
        <div>
            <h1>Redshift logo</h1>

        <h3> Username </h3>
            <input type="text" name="username"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
                setUsername(event.target.value)
            }
            }/>

            <button type="button" onClick={() => {
                setUsername(tempUser);
            }} />
            
            <h3>{username} </h3>   

            <h3> Password </h3>
            <input type="text" name="Password"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempPassword);
                setPassword(event.target.value)
            }
            }/>

            <button type="button" onClick={() => {
                setPassword(tempPassword);
            }} />
            
            <h3>{password} </h3>  

            <button type="submit" >Login</button>
        <button >Reset</button> 
        </div>
     );
}
 
export default Login;