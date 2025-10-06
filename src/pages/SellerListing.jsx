import axios from 'axios';
import {useEffect, useState} from 'react';
import ListingCard from '../components/ListingCard';

const SellerListing = () => {
  const [listings, setListings]=useState([]);

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

  return (
    <div>
      <h2>Your Listings</h2>
      <ul>
        <div className="listing-grid">
          {listings.map((listing) => (
            <ListingCard listing={listing} key={listing.id}/>
          ))}   
        </div>     
      </ul>
    </div>
  );
}

export default SellerListing;