import React, { createContext, useState } from 'react'

export const ProdContext = createContext()
const ProductContext = ({children}) => {
    const [allProducts, setAllProducts] = useState([])
    const [showCartPage, setShowCartPage] = useState(false)
    const handleRemove = (id) => {
        setAllProducts(prev => prev.map((el) => 
        el.id == id && el.count > 0 ? {...el, count: el.count -1} : el))
    }
    const handleAdd = (id) => {
        setAllProducts(prev => prev.map((el) => 
        el.id == id ? {...el, count: el.count + 1} : el))
    }
    const value = {
        allProducts,
        setAllProducts,
        showCartPage,
        setShowCartPage,
        handleRemove,
        handleAdd
    }
  return (
    <ProdContext.Provider value={value}>{children}</ProdContext.Provider>
  )
}

export default ProductContext