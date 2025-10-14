// SellerPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/Seller.css"
import Summary from '../components/Summary';

const Seller = () => {
  const [listings, setListings] = useState([]);
  const [sellerName, setSellerName] = useState("");

  const sellerId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  // Fetch listings for this seller
useEffect(() => {
  if (!sellerId || !token) return; // Don't fetch if not logged in

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
    <>
      <div>
        <h1>Welcome Back {sellerName}!</h1>

        <h2>Add New Listing</h2>
        <Link to="/add-listing" className="seller-listing-link">Add a listing</Link>
        <div></div>
        <Link to="/seller-listing" className="seller-listing-link">Your Listings</Link>
      </div>
      <div>
        <Summary/>
      </div>
    </>
  );
}

export default Seller;
