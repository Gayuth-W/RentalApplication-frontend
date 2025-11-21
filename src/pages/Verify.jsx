import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginSignup.css"


function Verify(){
  const navigate=useNavigate();
  const [verificationCode, setVerificationCode]=useState("");
  const [email, setEmail]=useState("");

  const handleVerify= async()=>{
    try{
        const response=await axios.post("http://localhost:8080/auth/verify", {
          email,
          verificationCode
        });
        alert("verified successfully!");
        navigate("/login-signup")
        console.log(response)
    }catch(err){
      console.log("error: "+err)
    }
  };
  useEffect(()=>{
    const savedEmail = localStorage.getItem("email");
    setEmail(savedEmail || ""); 
  }, [])

  return(

    <div className="container">
      <p>
        {"Enter the recived verification sent to: "+email}
      </p>
      <div className="input">
        <input type="text" placeholder="verification code" value={verificationCode} 
        onChange={(e) => setVerificationCode(e.target.value)}></input>
      </div>

      <div className="verify-container">
        <div className="submit" onClick={handleVerify}>verify</div>
      </div>   
      <p>
        <span
          style={{ color: "gray", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/login-signup")}
        >
          click
        </span> to go to the login page
      </p>             
    </div>    
  );
}

export default Verify;