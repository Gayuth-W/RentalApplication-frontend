import { useState, useEffect } from "react";
import ListingCard from "../components/ListingCard";
import "../css/Home.css";
import axios from "axios";

function Home(){

  const [searchQuery, setSearchQuery]=useState("");
  const [listing, setListings]=useState([]);
  const [error, setError]=useState(null);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/home");
        setListings(response.data);  // store response in state
      } catch (err) {
        console.error(err);
        setError("Failed to load listings");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await axios.get(`http://localhost:8080/api/home?search=${searchQuery}`);
      setListings(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to perform search");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return(
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input type="text"
        placeholder="search for listings..."
        className="search-input"
        value={searchQuery}
        onChange={(e) =>{ setSearchQuery(e.target.value)}}
        ></input>
        <button type="submit" className="search-button">Search</button>
      </form>
    
      <div className="Home">
        <div className="listing-grid">
          {listing.map((listing) => (
          listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          <ListingCard listing={listing} key={listing.id}/>
          ))}
        </div>
      </div>    
    </>
  );
}

export default Home;