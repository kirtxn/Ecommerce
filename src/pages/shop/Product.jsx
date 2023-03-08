import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Product.css";
const Product = (props) => {
  const { id, title, price, image } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="product">
      <img src={image} alt="img"></img>
      <div className="description">
        <p className="name">{title}</p>
        <h3 className="price">Price: {price}₹</h3>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
