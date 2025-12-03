import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/SideComponent.css"
import axios from "axios";

function SideComponent(){
  const navigate=useNavigate();

  const handleDelete= async(e)=>{
    try{
      await axios.delete(`http://localhost:8080/api/delete-seller/${localStorage.getItem('userId')}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
      navigate(`/delete-seller`)
    }catch(err){
      console.log(err);
    }
  }  
  return(
    <>
      <div className="side-component">
        <div className="side-detail">
          <button onClick={()=>{navigate(`seller/${localStorage.getItem('userId')}`)}}>User Profile</button>
        </div>
        <div className="side-detail">
          <button onClick={()=>{navigate(`update-profile/${localStorage.getItem('userId')}`)}}>Update Profile</button>
        </div>        
        <div className="side-detail">
          <button onClick={()=>{navigate(`/add-listing`)}}>Add Listing</button>
        </div>     
        <div className="side-detail">
          <button onClick={()=>{navigate(`/seller-listing`)}}>Show Listing</button>
        </div>    
        <div className="side-detail">
          <button onClick={()=>{handleDelete()}}>Delete Account</button>
        </div>                               
      </div>
    </>
  );
}

export default SideComponent;