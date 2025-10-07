import { Link } from "react-router-dom";
import "../css/NavBar.css";
import LogoutButton from "./LogoutButton";
import { useState, useEffect } from "react";

function NavBar(){

  const sellerId = localStorage.getItem('userId');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);  

  return(
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/home" className="nav-home">Listings</Link>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home </Link>
          <Link to="/about" className="nav-link"> About</Link>
          {!isLoggedIn && (<Link to="/login-signup" className="nav-link"> Login</Link>)}
          {isLoggedIn && (<>
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