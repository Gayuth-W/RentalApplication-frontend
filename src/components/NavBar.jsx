import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar(){
  return(
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/home" className="nav-home">Listings</Link>
        </div>
        <div className="navbar-links">
          <Link to="/home" className="nav-link">Home </Link>
          <Link to="/about" className="nav-link"> About</Link>
          <Link to="/login-signup" className="nav-link"> Login</Link>
          <Link to="/other" className="nav-link"> Other</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar