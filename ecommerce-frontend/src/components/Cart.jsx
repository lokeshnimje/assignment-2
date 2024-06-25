import React, { useContext } from "react";
import { ProdContext } from "../contextApi/ProductContext";
import "./style.css";
const Cart = () => {
  const { allProducts, setShowCartPage, handleRemove } =
    useContext(ProdContext);
  console.log(allProducts);
  return (
    <div>
      <h1>Cart</h1>
      <button className="btns" onClick={() => setShowCartPage(false)}>
        Back
      </button>
      {allProducts &&
        allProducts
          .filter((items) => items.count > 0)
          .map((items) => {
            return (
              <div className="cartListContainer">
                <p>{items.name}</p>
                <p>{items.count}</p>
                <button onClick={() => handleRemove(items.id)}>-</button>
              </div>
            );
          })}
    </div>
  );
};

export default Cart;
