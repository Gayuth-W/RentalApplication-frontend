// SellerPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "../css/Seller.css"

const Seller = () => {
  const [listings, setListings] = useState([]);
  const [newListing, setNewListing] = useState({
    title: '',
    location: '',
    address: '',
    about: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    guests: '',
    propertyType: 'SINGLE',
  });

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



  // Handle new listing form changes
  const handleChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  // Submit new listing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/post-listing', {
        ...newListing,
        sellerId: Number(sellerId)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Listing added successfully!');
      setNewListing({
        title: '',
        location: '',
        address: '',
        about: '',
        price: '',
        bedrooms: '',
        bathrooms: '',
        guests: '',
        propertyType: '',
        sellerId: Number(sellerId)
      });
      // Refresh the listings
      const response = await axios.get(
        `http://localhost:8080/api/get-listing-seller-${sellerId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setListings(response.data);
    } catch (err) {
      console.error(err);
      alert('Failed to add listing');
    }
  };

  return (
    <div>
      <h1>Seller Page</h1>

      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="title" value={newListing.title} onChange={handleChange} placeholder="Title" required />
        <input name="location" value={newListing.location} onChange={handleChange} placeholder="Location" required />
        <input name="address" value={newListing.address} onChange={handleChange} placeholder="Address" required />
        <textarea name="about" value={newListing.about} onChange={handleChange} placeholder="About" required />
        <input type="number" name="price" value={newListing.price} onChange={handleChange} placeholder="Price" required />
        <input type="number" name="bedrooms" value={newListing.bedrooms} onChange={handleChange} placeholder="Bedrooms" required />
        <input type="number" name="bathrooms" value={newListing.bathrooms} onChange={handleChange} placeholder="Bathrooms" required />
        <input type="number" name="guests" value={newListing.guests} onChange={handleChange} placeholder="Guests" required />
        <select name="propertyType" value={newListing.propertyType} onChange={handleChange}>
          <option value="SINGLE">SINGLE</option>
          <option value="SHARING">SHARING</option>\
        </select>
        <button type="submit" className='seller-listing-btn'>Add Listing</button>
      </form>
      <Link to="/seller-listing" className="seller-listing-link">Your Listings</Link>
    </div>
  );
};

export default Seller;
