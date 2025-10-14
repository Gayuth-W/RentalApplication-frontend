import axios from "axios";
import { useEffect, useState } from "react";
import "../css/Seller.css";

const Summary = () =>{
  const [seller, setSeller]=useState();
  const sellerId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!sellerId || !token) return;
    const fetchSeller = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/get-seller/${sellerId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSeller(response.data);
        console.log(seller)
      } catch (err) {
        console.error("Error fetching seller details:", err);
      }
    };

    fetchSeller();
  }, [sellerId, token]);
return(
  <div className="seller-details">
    {seller ? (
      <>
        <h2>Seller Details</h2>
        <p>Name: {seller.fname} {seller.lname}</p>
        <p>Email: {seller.email}</p>
        {/* Add more fields if needed */}
      </>
    ) : (
      <p>Loading seller details...</p>
    )}
  </div>
);
}

export default Summary;