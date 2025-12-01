// SellerPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/Seller.css"
import Summary from '../components/Summary';

const Seller = () => {
  const [listings, setListings] = useState([]);
  const [sellerName, setSellerName] = useState("");

  const navigate = useNavigate();  

  const sellerId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

useEffect(() => {
  if (!sellerId || !token){
    navigate("/login-signup");
    return;
  }

  const fetchListings = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/get-listing-seller-${sellerId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setListings(response.data);
    } 
    catch (err) {
      console.error(err);
    }
  };
  fetchListings();
}, [sellerId, token]);

useEffect(() => {
  if (!sellerId || !token) return;
  console.log(token);
  const fetchSeller = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/get-seller/${sellerId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSellerName(response.data.fname +" "+ response.data.lname || "Seller");
    } catch (err) {
      console.error("Error fetching seller name:", err);
      setSellerName("Seller sd");
    }
  };

  fetchSeller();
}, [sellerId, token]);

  return (
    <div>
      <header className="seller-header">
        <h1 className="seller-title">Welcome back, {sellerName}! 👋</h1>
        <p className="seller-subtitle">
          Manage your listings and view your performance all in one place.
        </p>
      </header>
    </div>
  );
}

export default Seller;
