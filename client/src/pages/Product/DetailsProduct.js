import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rate from "../../components/Rate";
import axios from "axios"
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setToast } from "../../redux/slices/toastSlice";
import { URL } from "../../API";
import { incrementCartproduct } from "../../redux/slices/userSlices"

const DetailsProduct = ({ product = { category : { name : "" } } }) => {
  const [quantity, setQuantity] = useState(1);
  const [levelSelect, setLevelSelect] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
 
  const handleAddToCart = async(e)=>{
    e.preventDefault() 
    const body = {
      _id : product._id,
      category : product.category._id
    }
    console.log(body)
      try {
        setLoading(true);
        const res = await axios.post(`${URL}/api/v1/addtocart`, body , { headers : { Authorization :`Bearer ${Cookies.get("token")}` } });
        setLoading(false);
        dispatch(setToast({open : true , text : res.data.message , mode : "success" }))
        dispatch(incrementCartproduct())
      } catch (err) {
         setLoading(false);
         console.log(err)
         dispatch(setToast({open : true , text : err.response.data.message , mode : "error" }))
      }
    };



  return (
    <div className="details-product">
      <p className="cat-name">{product.category.name}</p>
      <h1>{product.name}</h1>
      <p className="price">
        <span className="text">Price :</span>
        <span>EGP {product.price}</span>
      </p>
      <p className="descount">
        <span className="text">Descount : </span>
        <span>EGP 180.00</span>
      </p>
      <Rate singleProduct />
      <div className="action ">
        <div className="select">
          <label>Quantity</label>
          <select onChange={handleChangeQuantity} value={quantity}>
            { levelSelect.map( (item,index) =>(
              <option value={item.value} key={index}>{item.value}</option>
            ) ) }
          </select>
        </div>
        <button disabled={loading} onClick={(e)=>handleAddToCart(e)}>{loading ? "Add to Cart..." : "Add to Cart" }</button>
      </div>
      <div className="desc">
        <label>Description</label>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DetailsProduct;
