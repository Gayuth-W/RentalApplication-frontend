import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgetPassword(){
  const navigate=useNavigate();

  const [action, setAction]=useState("not-sent");
  const [email, setEmail]=useState("");
  const [verificationCode, setVerificationCode]=useState("");
  const [newPassword, setNewPassword]=useState("");

  const handleForgetPassowrd =async ()=>{
    try{
      const response=await axios.post("http://localhost:8080/auth/forget-password", {
        email
      });
      alert("pin code sent to "+email);
      console.log(response);
      setAction("sent")
    }catch(err){
      console.log(err);
    }
  };

  const handleResetPassword= async()=>{
    try{
      const response=await axios.post("http://localhost:8080/auth/forget-password", {
        email,
        verificationCode,
        newPassword
      });
      alert("successfully changed the password");
      console.log(response);
    }catch(err){
      console.log(err);
    }finally{
      navigate("/login-signup")
    }
  };
  useEffect(()=>{
    setAction("not-sent")
  }, [])
  return(
    <>
      <div className='container'>
        {action==="not-sent" ? (
          <>
            <p>
              Enter the email
            </p>
            <div className='input'>
            <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <div className='verify-container'>
              <div className='submit' onClick={handleForgetPassowrd}>
              verify</div>
            </div>          
              </>
        ):(
          <>
            <p>
              Enter the verification code and the new password
            </p>
            <div className='inputs'>
              <div className='input'>
              <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>

              <div className='input'>
              <input type="text" placeholder='verification code' value={verificationCode} onChange={(e)=>setVerificationCode(e.target.value)}></input>
              </div>

              <div className='input'>
              <input type="text" placeholder='New Password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
              </div>  
            </div>                      

            <div className='verify-container'>
              <div className='submit' onClick={handleResetPassword}>
              change password</div>
            </div>          
          </>
        )}
      </div>
    </>
  );
}

export default ForgetPassword;