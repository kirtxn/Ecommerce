import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import './Shop.css'
const Shop = (props) => {

  return (
    <div className="shop">
      <div className="products">
        {props.data.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
