import "../css/Favourites.css";
import { useListingContext } from "../contexts/ListingContext";
import ListingCard from "../components/ListingCard";

function Favourites(){

  const {Favourites}=useListingContext();

  if(Favourites.length>0){
    return(
      <div className="favourites">
        <h2>Your Favourite Rentals...</h2>
        <div className="listing-grid">
          {Favourites.map((listing) => (
            <ListingCard listing={listing} key={listing.id}/>
          ))}
        </div> 
      </div>
    );
  }
  return(
    <>
      <div className="about">
        <h1>Your Favourite Rentals...</h1>
        <p>Get your rental today...</p>
      </div>
    </>
  );
}

export default Favourites