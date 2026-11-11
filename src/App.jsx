import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProductListing from "./components/ProductListing";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature home and make every space beautiful
          with our collection of indoor plants.
        </p>

        <button onClick={() => navigate("/products")}>
          Get Started
        </button>
      </div>

      <AboutUs />
    </div>
  );
};


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={
          <>
            <Navbar />
            <ProductListing />
          </>
        }
      />

      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />
    </Routes>
  );
};

export default App;
