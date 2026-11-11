
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { Link } from "react-router-dom";
// import "./Cart.css";
import "./CartItem.css"

const CartItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <h3>Total Plants: {totalItems}</h3>

      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty!</p>
          <Link to="/products">Continue Shopping</Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h2>{item.name}</h2>

                <p>Unit Price: ${item.price}</p>

                <p>Quantity: {item.quantity}</p>

                <p>
                  Subtotal: ${item.price * item.quantity}
                </p>

                <div className="quantity-buttons">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>

          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>

          <button onClick={() => alert("Coming Soon!")}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;
