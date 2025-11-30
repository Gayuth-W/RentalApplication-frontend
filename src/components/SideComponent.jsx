import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SideComponent.css"

function SideComponent(){
  const navigate=useNavigate();
  return(
    <>
      <div className="side-component">
        <div className="side-detail">
          <button onClick={()=>{navigate(`seller/${localStorage.getItem('userId')}`)}}>User Profile</button>
        </div>
        <div className="side-detail">
          <button onClick={()=>{navigate(`update-profile/${localStorage.getItem('userId')}`)}}>Update Profile</button>
        </div>        
      </div>
    </>
  );
}

export default SideComponent;