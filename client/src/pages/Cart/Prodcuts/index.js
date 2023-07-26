import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { Button } from "@mui/material";

const Products = ({ products = [], deleteProduct }) => {
  const [ cartProducts , setCartProducts ] = useState([])
  useEffect(()=>{
    
  },[])
  
  return (
    <div className="products">
      {products.map((item, index) => (
        <ProductCart product={item} deleteProduct={deleteProduct} key={index} />
      ))}

      <div className="btn">
        <Button
          sx={{
            backgroundColor: "#551A8B",
            color: "white",
            width: "200px",
            ":hover": { backgroundColor: "#551A8B", color: "white" },
          }}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default Products;
