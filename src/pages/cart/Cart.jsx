import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
const Cart = (props) => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      {props.data.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}
      <h3>SubTotal: {totalAmount}</h3>
      <div className="checkout">
        <button className="Btn">Checkout</button>
        <button className="Btn">Continue Shopping</button>
      </div>
    </div>
  );
};

export default Cart;
