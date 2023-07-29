import { Cancel } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../../API";
import Cookies from "js-cookie";
const Checkout = ({ order, totalPrice, setCheckout }) => {
  const [shoppingInfo, setShoppingInfo] = useState({});

  const handelChange = (e) => {
    setShoppingInfo({ ...shoppingInfo, [e.target.name]: e.target.value });
    console.log(shoppingInfo);
  };

  const handleSumbit = async () => {
    const body = {
      shippingInfo: shoppingInfo,
      orderItems: order,
      totalPrice: totalPrice,
    };
    console.log(body)
    try {
      const res = await axios.post(`${URL}/api/v1/order/new`, body, {
        headers: { authorization: `Bearer ${Cookies.get("token")}`},
      });
      console.log(res)
    } catch (err) {
      console(err)
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-wrapper">
        <div className="head">
          <p>Checkout</p>
          <Cancel onClick={() => setCheckout(false)} />
        </div>
        <hr />

        <div className="shopping-info">
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            required
            name="name"
            onChange={handelChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            type="tel"
            variant="outlined"
            required
            name="phoneNo1"
            onChange={handelChange}
          />
          <div className="line">
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              sx={{ width: "100%" }}
              required
              name="address"
              onChange={handelChange}
            />
          </div>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            required
            name="city"
            onChange={handelChange}
          />
          <TextField
            id="outlined-basic"
            label="Second Phone"
            variant="outlined"
            name="phoneNo2"
            onChange={handelChange}
          />
        </div>
        <hr />

        <div className="cards">
          {order.map((item, index) => (
            <div className="card">
              <div className="item">
                <div className="div-img">
                  <img src={item.image.url} alt="product" />
                </div>
                <div className="text">
                  <p className="title">{item.name}</p>
                  <p className="items-num"> items : {item.quantity} </p>
                </div>
              </div>
              <div className="price">
                <p>{item.quantity * item.price} EGP</p>
              </div>
            </div>
          ))}
          <div className="total-price">
            <p>Total price : {totalPrice} </p>
          </div>
        </div>

        <hr />

        <div className="send-btn">
          <Button
            sx={{
              backgroundColor: "#551A8B",
              color: "white",
              width: "200px",
              ":hover": { backgroundColor: "#551A8B", color: "white" },
            }}
            onClick={()=>setCheckout(false)}
          >
            Send Order
          </Button>
        </div>
      </div>
      <div className="checkout-body"></div>
    </div>
  );
};

export default Checkout;
