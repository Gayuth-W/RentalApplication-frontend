import axios from "axios";
import "../css/LoginSignup.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const navigate = useNavigate();

  const [action, setAction] = useState("Login");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 


  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        fname,
        lname,
        phone,
        email,
        password,
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log("Signup success:", response.data);
      alert("Signup successful!");
      setAction("Login");
    } catch (err) {
      console.error("Signup failed:", err);
    }finally{
      localStorage.setItem("email", email);
      navigate('/verify');      
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      alert("Login successful!");
      console.log("Login success:", response.data);

      localStorage.setItem('userId', response.data.sellerId);
      localStorage.setItem('token', response.data.token);
      window.dispatchEvent(new Event('storage'));

      navigate(`/seller/${response.data.sellerId}`);
    } catch (error) {
      alert("Login failed!");
      console.error("Login failed:", error.response?.data || error.message);
    }
  }; 



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
              <input type="text" placeholder="first name" value={fname} onChange={(e) => setFname(e.target.value)}></input>
            </div>
            <div className="input">
              <input type="text" placeholder="last name" value={lname} onChange={(e) => setLname(e.target.value)}></input>
            </div>
            <div className="input">
              <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
          </>
        :
        null     
        }              
        <div className="input">
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="input">
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
      </div>

      {action==="Login"?<div className="forgot-password">Forgot Password? <span onClick={() => navigate("/forget-password")}>click here!</span></div>:null}
       
      
        {action === "Login" ? (
          <div className="switch-container">
            <div
              className={action === "Signup" ? "switch active" : "switch"}
              onClick={() => setAction("Signup")}
            >
              Sign up
            </div>
          </div>
        ) : (
          <div className="switch">
            <div
              className={action === "Login" ? "switch active" : "switch"}
              onClick={() => setAction("Login")}
            >
              Login
            </div>
          </div>
        )}        

      <div className="submit-container">
        {action === "Signup" ? (
          <div className="submit" onClick={handleSignup}>Sign up</div>
        ) : (
          <div className="submit" onClick={handleLogin}>Login</div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;