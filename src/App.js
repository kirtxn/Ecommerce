import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import { useState,useEffect } from "react";
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <div className="App">
      <ShopContextProvider data={data}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop data= {data} />} />
            <Route path="/cart" element={<Cart data= {data} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
