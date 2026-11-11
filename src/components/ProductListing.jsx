
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import products from "./product";
import { addToCart } from "../features/cartSlice";
import "./product.css";

const ProductListing = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const categories = [...new Set(
    products.map((product) => product.category)
  )];

  return (
    <div className="products-container">
      <h1 className="page-title">Our Houseplants</h1>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="category-products">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const isAdded = cartItems.some(
                  (item) => item.id === product.id
                );

                return (
                  <div className="product-card" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400";
                      }}
                    />

                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>${product.price}</h3>

                    <button
                      onClick={() => dispatch(addToCart(product))}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductListing;
