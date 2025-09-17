import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar(){
  return(
    <>
      <div className="navbar">
        <div className="navbar-brand">
          <Link to="/">Listing</Link>
        </div>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home </Link>
          <Link to="/about" className="nav-link"> About</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar