import { useListingContext } from "../contexts/ListingContext";
import "../css/ListingCard.css"
import { useNavigate } from "react-router-dom";

function ListingCard({listing}){

  const { addToFavourites, removeFromFavourites, isFavorite}=useListingContext();
  const favourite=isFavorite(listing.id);

  function onFavouriteClick(e){
    e.preventDefault();
    if(favourite)
        removeFromFavourites(listing.id)
    else
      addToFavourites(listing)
  }

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/listing/${listing.id}`);
  }; 

  return(
    <>
      <div className="listing-card" onClick={goToDetail}>
        <div className="listing-poster">
          <img src= {`https://image.tmdb.org/t/p/w500${listing.poster_path}`} alt={listing.title}></img>
          <div className="listing-overlay">
            <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
              O
            </button>
          </div>
        </div>
        <div className="listing-info">
          <h1>{listing.title}</h1>
        </div>
      </div>
    </>
  );
}

export default ListingCard;