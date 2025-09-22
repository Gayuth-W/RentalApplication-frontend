import ListingCard from "../components/ListingCard";
import { useState , useEffect} from "react";
import "../css/Home.css"
import { getRentingRates, searchRates } from "../services/api";

function Other(){

  const [searchQuery, setSearchQuery]=useState("");
  const [listing, setListings]=useState([]);
  const [error, setError]=useState(null);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    const getPopularRentingRates = async () => {
      try{
        const popularRates = await getRentingRates();
        setListings(popularRates)
      } catch(err){
        console.log(err)
        setError("Failed to load the rates...")
      }
      finally{
        setLoading(false)
      }
    }

      getPopularRentingRates();
  }, [])

  const handleSearch= async (e) =>{
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true);
    try{
      const searchResults = await searchRates(searchQuery)
      setListings(searchResults)
      setError(null)
    } catch (err){
      console.log(err)
      setError("Failed to search listings...")
    } finally {
      setLoading(false)
    }

    setSearchQuery("");
  };
  return(
    <>
      <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
          <input type="text"
          placeholder="search for listings..."
          className="search-input"
          value={searchQuery}
          onChange={(e) =>{ setSearchQuery(e.target.value)}}
          ></input>
          <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ?(
          <div className="loading">Loading...</div>
        ) : (
        <div className="listing-grid">
          {listing.map((listing) => (
            listing.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            <ListingCard listing={listing} key={listing.id}/>
          ))}
        </div>          
        )}


        
      </div>
    </>
  );
}

export default Other;