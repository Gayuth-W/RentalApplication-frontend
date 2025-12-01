import axios from "axios";
import { useEffect, useState } from "react";
import "../css/LoginSignup.css";

const FormSubmit = () => {
  const [listings, setListings] = useState([]);

  const sellerId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [newListing, setNewListing] = useState({
    title: "",
    location: "",
    address: "",
    about: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    guests: "",
    propertyType: "SINGLE",
  });

  const handleChange = (e) => {
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/post-listing",
        {
          ...newListing,
          sellerId: Number(sellerId),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Listing added successfully!");

      setNewListing({
        title: "",
        location: "",
        address: "",
        about: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        guests: "",
        propertyType: "SINGLE",
      });

      const response = await axios.get(
        `http://localhost:8080/api/get-listing-seller-${sellerId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setListings(response.data);
    } catch (err) {
      console.error(err);
      alert("Failed to add listing");
    }
  };

  useEffect(() => {
    if (!sellerId || !token) return;

    const fetchListings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/get-listing-seller-${sellerId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setListings(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchListings();
  }, [sellerId, token]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">Add New Listing</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="inputs">

          <div className="input">
            <input
              type="text"
              name="title"
              value={newListing.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
          </div>

          <div className="input">
            <input
              type="text"
              name="location"
              value={newListing.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
          </div>

          <div className="input">
            <input
              type="text"
              name="address"
              value={newListing.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>

          <div className="input">
            <input
              name="about"
              value={newListing.about}
              onChange={handleChange}
              placeholder="About"
            ></input>
          </div>

          <div className="input">
            <input
              type="number"
              name="price"
              value={newListing.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </div>

          <div className="input">
            <input
              type="number"
              name="bedrooms"
              value={newListing.bedrooms}
              onChange={handleChange}
              placeholder="Bedrooms"
            />
          </div>

          <div className="input">
            <input
              type="number"
              name="bathrooms"
              value={newListing.bathrooms}
              onChange={handleChange}
              placeholder="Bathrooms"
            />
          </div>

          <div className="input">
            <input
              type="number"
              name="guests"
              value={newListing.guests}
              onChange={handleChange}
              placeholder="Guests"
            />
          </div>

          <div className="input">
            <select
              name="propertyType"
              value={newListing.propertyType}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            >
              <option value="SINGLE">SINGLE</option>
              <option value="SHARING">SHARING</option>
            </select>
          </div>
        </div>

        <div className="submit-container">
          <div className="submit" onClick={handleSubmit}>
            Add Listing
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSubmit;
