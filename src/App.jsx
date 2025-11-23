import './css/App.css';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Welcome from './pages/Welcome';
import FormSubmit from './components/FormSubmit';
import Verify from './pages/verify';
import ForgetPassword from './pages/ForgetPassword';
import UpdateProfile from './pages/UpdateProfile';


function App() {
  const location = useLocation();
  const hideNav = location.pathname === '/';
  return (
    <>
    <ListingProvider>
      {!hideNav && <NavBar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<Favourites/>}/>
          <Route path="/login-signup" element={<LoginSignup/>}/>
          <Route path="/other" element={<Other/>}/>
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/seller/:id" element={<Seller/>} />
          <Route path="/test" element={<Counter/>} />
          <Route path="/seller-listing" element={<SellerListing/>} />
          <Route path="/add-Listing" element={<FormSubmit/>} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/forget-password" element={<ForgetPassword/>}/>
          <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
        </Routes>
      </main>
    </ListingProvider>
    </>
  );
}

export default App
