import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      const response = await axios.get(`http://localhost:8080/api/listing/${id}`);
      setListing(response.data);
    };
    fetchListing();
  }, [id]);

  if (!listing) return <div>Loading...</div>;

  return (
    <div>
      <h1>{listing.title}</h1>
      <p><strong>Location:</strong> {listing.location}</p>
      <p><strong>Address:</strong> {listing.address}</p>
      <p><strong>Price:</strong> ${listing.price}</p>
      <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
      <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
      <p><strong>Guests:</strong> {listing.guests}</p>
      <p><strong>Property Type:</strong> {listing.propertyType}</p>
      <p>{listing.about}</p>
    </div>
  );
}

export default ListingDetail;
