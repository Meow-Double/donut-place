import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import MyOrder from "./pages/MyOrder/MyOrder";
import contextCart from "./context/contextCart";
import contextFavorite from "./context/contextFavorite";
import contextOrder from "./context/contextOrder";

import "./App.scss";
import MyFavorite from "./pages/MyFavorite/MyFavorite";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [favoritedItems, setFavoritedItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const isCartAdded = (id) => {
    return cartItems.some(obj => obj.id === id);
  }

  const isProductFavorited = (id) => {
    return favoritedItems.some(obj=> obj.id === id)
  }


  return (
    <>
    <contextOrder.Provider value={{orderItems, setOrderItems}}>
        <contextCart.Provider value={{ cartItems, setCartItems, isCartAdded }}>
          <contextFavorite.Provider value={{favoritedItems, setFavoritedItems, isProductFavorited}}>
            <div className="wrapper">
              <div className="container">
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/my-order" element={<MyOrder />} />
                    <Route path="/my-favorite" element={<MyFavorite />} />
                    <Route path="/about-us" element={<AboutUs />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </div>
          </contextFavorite.Provider>
        </contextCart.Provider>
      </contextOrder.Provider>
    </>
  );
}

export default App;
