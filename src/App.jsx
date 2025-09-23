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
        </Routes>
      </main>
    </ListingProvider>
    </>
  );
}

export default App
