import React from 'react';


function Login(){
    return (
        <>
          <div className="loginbox">
            <div className="cardbox">
             <ul className="loginul reset">
                 <li>
                   <label>User Name</label>
                   <input type="text"></input>
                   </li>
                 <li>
                 <label>Password</label>
                   <input type="password"></input>
                   </li>
                 <li className="loginbtn">
                     <button type="submit">Login</button>
                 </li>
             </ul>
            </div>
          </div>
        </>
    )
}

export default Login;
 