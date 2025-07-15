import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingForm from './Components/ListingForm';
import ListingList from './Components/ListingList';
import './App.css';

function App() {
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState({
    title: '', location: '', address: '', ownerName: '', phone: ''
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = () => {
    axios.get('http://localhost:8080/api/listings')
      .then(res => setListings(res.data))
      .catch(() => alert("Could not fetch listings. Is backend running?"));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/listings', formData)
      .then(res => {
        setListings(prev => [...prev, res.data]);
        setFormData({ title: '', location: '', address: '', ownerName: '', phone: '' });
      })
      .catch(() => alert("Failed to post listing."));
  };

  return (
<div className="container">
  <div className="listings-below">
    <h2>Available Rentals</h2>
    <ListingList listings={listings} />
  </div>

  <div className="form-top-right">
    <h2>Post a Rental</h2>
    <ListingForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
  </div>
</div>

  );
}

export default App;
