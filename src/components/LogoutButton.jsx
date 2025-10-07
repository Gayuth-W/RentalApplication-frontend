import { useNavigate } from "react-router-dom";
import "../css/NavBar.css";

const LogoutButton=({ onLogout })=>{
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    onLogout();
    navigate('/login-signup')
  }
  return(
    <>
      <button onClick={handleLogout} className="nav-link">
        Logout
      </button>
    </>
  );
}

export default LogoutButton;