import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginSignup.css"


function Verify(){
  const navigate=useNavigate();
  const [code, setCode]=useState("");
  const [email, setEmail]=useState("");

  const handleVerify= async()=>{
    try{
        const response=await axios.post("http://localhost:8080/auth/verify", {
          email,
          verificationCode
        });
        alert("verified successfully!");
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
        <input type="text" placeholder="verification code" value={code} 
        onChange={(e) => setCode(e.target.value)}></input>
      </div>

      <div className="verify-container">
        <div className="submit" onClick={handleVerify}>verify</div>
      </div>             
    </div>    
  );
}

export default Verify;