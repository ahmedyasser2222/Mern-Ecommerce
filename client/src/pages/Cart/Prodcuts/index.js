import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Products = ({
  products = [],
  deleteProduct,
  setOrder,
  order,
  handelQuantity,
}) => {
  const [cartProducts, setCartProducts] = useState([]);
  
  return (
    <div className="products">
      <p className="title">Cart</p>
      {products.map((item, index) => (
        <ProductCart
          product={item}
          index={index}
          deleteProduct={deleteProduct}
          handelQuantity={handelQuantity}
          key={index}
          order={order[index]}
        />
      ))}
      <div className="btn">
        <Link to="/">
        <Button
          sx={{
            border: " 1px solid #551A8B",
            width: "200px",
            ":hover": { backgroundColor: "#551A8B", color: "white" },
          }}
        >
          Continue Shopping
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
