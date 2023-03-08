import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <div className="shop">
          <Link to="/" >
         Amazon
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
