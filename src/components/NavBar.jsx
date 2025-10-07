import { Link } from "react-router-dom";
import "../css/NavBar.css";
import LogoutButton from "./LogoutButton";
import { useState } from "react";

function NavBar(){

  const sellerId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));


  return(
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/home" className="nav-home">Listings</Link>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home </Link>
          <Link to="/about" className="nav-link"> About</Link>
          {!token && (<Link to="/login-signup" className="nav-link" onLogin={() => setIsLoggedIn(true)}> Login</Link>)}
          {token && (<>
                        <Link to={`/seller/${sellerId}`} className="nav-link">Account</Link>
                        <LogoutButton onLogout={() => setIsLoggedIn(false)}/>
                      </>)}
          <Link to="/other" className="nav-link"> Other</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar