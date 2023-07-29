import { Button, ButtonGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const Summary = ({ products, order  , totalPrice, setCheckout }) => {


  return (
    <div className="summary">
      <p className="title">Order Summary</p>
      <div className="info">
        <TextField
          placeholder="Coupon Code"
          size="small"
          sx={{ width: "75%", margin: "2%" }}
        />
        <Button
          size="small"
          aria-label="select merge strategy"
          aria-haspopup="menu"
          sx={{
            width: "18%",
            backgroundColor: "#551A8B",
            color: "white",
            ":hover": { backgroundColor: "#551A8B", color: "white" },
          }}
        >
          send
        </Button>
      </div>
      <div className="info">
        <p>Total Price :</p>
        <span>{ totalPrice }</span>
      </div>
      <Button
        sx={{
          backgroundColor: "#551A8B",
          color : "white",
          width: "200px",
          ":hover": { backgroundColor: "#551A8B", color: "white" },
        }}
        onClick={()=>setCheckout(true)}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
