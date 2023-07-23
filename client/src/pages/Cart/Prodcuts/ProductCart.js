import React from "react";
import Rate from "../../../components/Rate";
import { Button, MenuItem, Select } from "@mui/material";
import Delete from "@mui/icons-material/Delete";

const ProductCart = () => {
  return (
    <div className="product-cart">
      <div className="div-img">
        <img src="https://f.nooncdn.com/p/pzsku/ZE2184DCE6F2B97B7DE72Z/45/_/1665591709/f006e417-7b51-40a6-a842-219c988e3a49.jpg?format=avif&width=240" />
      </div>
      <div className="details">
        <div>
          <p className="cat">Category name</p>
          <p className="name">Baby Boys Logo Jogger Set 1-2y years</p>
          <Rate singleProduct />
          <p className="price">
            <span>EGP</span> 180
          </p>
        </div>
        <div>
          <div className="action">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              sx={{ m: 1, minWidth: 100, height: "40px", margin: "0 8px" }}
              defaultValue={1}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            <Button sx={{ color: "#868992" }}>
              <Delete />
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
