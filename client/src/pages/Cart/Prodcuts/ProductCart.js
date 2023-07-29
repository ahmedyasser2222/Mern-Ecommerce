import React, { useEffect, useState } from "react";
import Rate from "../../../components/Rate";
import { Button, MenuItem, Select } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setToast } from "../../../redux/slices/toastSlice";
import { decrementCartproduct } from "../../../redux/slices/userSlices";
import axios from "axios";
import { URL } from "../../../API";

const ProductCart = ({ product, deleteProduct, handelQuantity, index , order}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    const body = {
      _id: product.product._id,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        `${URL}/api/v1/deleteproductfromcart`,
        body,
        { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }
      );
      setLoading(false);
      dispatch(
        setToast({ open: true, text: res.data.message, mode: "success" })
      );
      dispatch(decrementCartproduct());
      deleteProduct(product);
    } catch (err) {
      setLoading(false);
      dispatch(
        setToast({ open: true, text: err.response.data.message, mode: "error" })
      );
    }
  };
  
  console.log("order",order)
  return (
    <div className="product-cart">
      <div className="div-img">
        <img src={product.product.images[0].url} />
      </div>
      <div className="details">
        <div>
          {/* <p className="cat"> <Text t={pro.category.name}/></p> */}
          <p className="name">{product.product.name} </p>
          <Rate singleProduct />
          <p className="price">
            <span>EGP</span> {product.product.price}
          </p>
        </div>
        <div>
          <div className="action">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              sx={{ m: 1, minWidth: 100, height: "40px", margin: "0 8px" }}
              value={order.quantity}
              onChange={(e)=>handelQuantity(index,e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            <Button
              disabled={loading}
              sx={{ color: "#868992" }}
              onClick={handleDeleteProduct}
            >
              <Delete />
              {loading ? "Delete..." : "Delete"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
