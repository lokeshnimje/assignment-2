import React, { useContext, useEffect } from "react";
import { ProdContext } from "../contextApi/ProductContext";
import { productList } from "../data";
import "./style.css";
import Cart from "./Cart";
const Products = () => {
  const {
    allProducts,
    setAllProducts,
    showCartPage,
    handleAdd,
    handleRemove,
    setShowCartPage,
  } = useContext(ProdContext);

  const url = "https://my-ecommerce-products.vercel.app/allProducts"
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(url)
        if(!response.ok){
          throw new Error ('Error in network response!')
        }
        const result = await response.json()
        const temp = 
        result &&
        result.map((el) => ({ ...el, count: 0 }))
        setAllProducts(temp);
      }catch(err){
        console.log("Error", err);
      }
    }
    fetchData()

  }, [setAllProducts]);

  return (
    <div>
      {!showCartPage ? (
        <>
          <h1>Product</h1>
          <button className="btns" onClick={() => setShowCartPage(true)}>Cart</button>
          <div className="productContainer">
            {allProducts &&
              allProducts.map(({id, name, count}) => {
                return (
                  <div className="productBox">
                    <p>{name}</p>
                    <div className="productBottom">
                      <button
                        disabled={count == 0}
                        onClick={() => handleRemove(id)}
                      >
                        -
                      </button>
                      <p>{count > 0 ? count : null}</p>
                      <button onClick={() => handleAdd(id)}>+</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default Products;
