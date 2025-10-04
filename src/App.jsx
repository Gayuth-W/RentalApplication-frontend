import { useState } from 'react';
import './css/App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/NavBar';
import "./css/App.css"
import { ListingProvider } from './contexts/ListingContext';
import LoginSignup from './pages/LoginSignup';
import Other from './pages/Other';
import ListingDetail from './pages/ListingDetail';
import Seller from './pages/Seller';
import Counter from './pages/test';
import SellerListing from './pages/SellerListing';


function App() {
  return (
    <>
    <ListingProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<Favourites/>}/>
          <Route path="/login-signup" element={<LoginSignup/>}/>
          <Route path="/other" element={<Other/>}/>
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/seller/:id" element={<Seller/>} />
          <Route path="/test" element={<Counter/>} />
          <Route path="/seller-listing" element={<SellerListing/>} />
        </Routes>
      </main>
    </ListingProvider>
    </>
  );
}

export default App
