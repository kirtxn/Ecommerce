import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartItem.css";

const CartItem = (props) => {
  const { id, title, image, price } = props.data;
  const { cartItems, addToCart, removeFromCart,updateCartItems } = useContext(ShopContext);
  return (
    
    <div className="cartItem">
      <img src={image} alt="cart"></img>
      <div className="desc">
        <p>
          <b>{title}</b>
        </p>
        <p style={{fontSize:"19px"}}><b>Price: {price}₹</b></p>

        <div class="cart-buttons">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=>updateCartItems(Number(e.target.value),id)}/>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
     
    </div>
    
  );
};

export default CartItem;
