import { Label } from "@mui/icons-material";
import { Button, Container, Divider, Rating, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setToast } from "../../redux/slices/toastSlice";
import { URL } from "../../API";
import Cookies from "js-cookie";
import axios from "axios"

const Comment = ({ review }) => (
  <div className="comment">
    <div className="user">
      <div className="div-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMHozIxtgJx0gbDdzgKy7hcRkDoP7houIjY65EDeY&s"
          alt="avatar"
        />
      </div>
      <p>{review.name}</p>
    </div>
    <div className="content">
      <p>
        {review.comment}
      </p>
    </div>
  </div>
);

const ReviewProduct = ({ product,setData }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handelSendReview = async (e) => {
    e.preventDefault();
    if (!comment) return null;
    const body = {
      rating: rate,
      comment: comment,
      productId: product._id,
    };
    
    try {
      setLoading(true);
      const res = await axios.put(`${URL}/api/v1/review`, body, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      setLoading(false);
      dispatch(
        setToast({ open: true, text: res.data.message, mode: "success" })
      );
      setData({product : {...product ,reviews : res.data.reviews} })
    } catch (err) {
      setLoading(false);
      dispatch(
        setToast({ open: true, text: err.response.data.message, mode: "error" })
      );
    }
  };

  return (
    <div className="review-product">
      <Container>
        <p className="title">Reviews</p>
        <div className="action">
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={1}
            defaultValue="Default Value"
            sx={{ width: "100%" }}
            value={comment}
            onChange={(event) => {
              setComment(event.currentTarget.value);
            }}
          />
          <Button
            sx={{
              backgroundColor: "#551A8B",
              color: "white",
              ":hover": { backgroundColor: "#551A8B", color: "white" },
            }}
            onClick={handelSendReview}
            disabled={loading}
          >
            {loading ? "Send..." : "Send"}
          </Button>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            margin: "10px 0",
            gap: "10px",
          }}
        >
          <label>Rate : </label>
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
          />
        </div>
        <Divider sx={{ margin: "20px 0" }} />
        {product.reviews.map( (item,index) => (
          <Comment review={item} key={index} />
        ) )}
      </Container>
    </div>
  );
};

export default ReviewProduct;
