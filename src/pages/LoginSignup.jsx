import "../css/LoginSignup.css"
import { useState } from "react";

function LoginSignup(){
  const [action, setAction]=useState("Login");
  return(
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>


      <div className="inputs">
        {action==="Signup"
        ?
          <>
            <div className="input">
              <input type="text" placeholder="first name"></input>
            </div>
            <div className="input">
              <input type="text" placeholder="last name"></input>
            </div>
            <div className="input">
              <input type="text" placeholder="phone"></input>
            </div>
          </>
        :
        null     
        }              
        <div className="input">
          <input type="email" placeholder="email"></input>
        </div>
        <div className="input">
          <input type="password" placeholder="password"></input>
        </div>
      </div>

      {action==="Login"?<div className="forgot-password">Forgot Password? <span>click here!</span></div>:null}
      
      <div className="submit-container">
        <div className={action==="Signup"?"submit gray":"submit"} onClick={() => {setAction("Signup")}}>Sign up</div>
        <div className={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignup;