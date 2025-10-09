import '../css/Welcome.css';
import { useNavigate } from "react-router-dom";

const Welcome=()=>{
  const navigate=useNavigate();
  return(
   <>
    <h1 className="welcome-page">Welcome to the Rential Application</h1>
    <div className="Welcome-paragraph">Your go to application for solid rentals...!</div>
    <button className="welcome-button" onClick={() => navigate('/home')}>Rentals</button>
   </> 
  )
}

export default Welcome;