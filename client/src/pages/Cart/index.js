import React, { useEffect, useState } from "react";

import "./style.scss";
import Products from "./Prodcuts";
import Summary from "./Summary";
import Cookies from "js-cookie";
import CircularProgressLoading from "../../components/CircularProgressLoading";
import axios from "axios";
import { URL } from "../../API";
import Checkout from "./Checkout";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cartProduct, setCartProduct] = useState({ cart: [] });
  const [order, setOrder] = useState([{
    productId: "",
    name : "",
    image : "",
    price: "",
    quantity: 1,
  }]);
  const [ totalPrice , setTotalPrice ] = useState(0)
  const [ checkout , setCheckout ] = useState(false)
  
 const handelPrice = (or) => {
        let pr = 0
        for(let i in or){
         pr += or[i].price * or[i].quantity
        }
        setTotalPrice(pr)
 }
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(`${URL}/api/v1/getcartproducts`, {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        });
        setCartProduct(res.data.cartProducts);
        setLoading(false);
        let or = [];
        for (let i in res.data.cartProducts.cart) {
          let t = {
            productId: res.data.cartProducts.cart[i].product._id,
            price: res.data.cartProducts.cart[i].product.price,
            quantity: 1,
            image : res.data.cartProducts.cart[i].product.images[0],
            name : res.data.cartProducts.cart[i].product.name
          };
          setOrder(t);
          or.push(t);
        }
        setOrder(or);
        handelPrice(or)
      } catch (err) {
        console.log('ppp')
        setLoading(false);
        setCartProduct(null);
      }
    }
    getData();
  }, []);

  const deleteProduct = (product) => {
    const ind = cartProduct.cart.indexOf(product);
    cartProduct.cart.splice(ind, 1);
    setCartProduct({ cart: cartProduct.cart });

    order.splice(ind, 1)
    setOrder(order)
    console.log(order)
    handelPrice(order)

  };

  const handelQuantity = (index , val) =>{
    order[index].quantity = val
    console.log(order)
    setOrder(order)
    handelPrice(order)
  }
  
  return (
    <div className="container-app">
      <div className="container">
        <div className="cart">
          {cartProduct.cart.length ? (
            <Products
              products={cartProduct.cart}
              deleteProduct={deleteProduct}
              setOrder={setOrder}
              order={order}
              handelQuantity={handelQuantity}
              
            />
          ) : (
            <p className="products">Cart Empity </p>
          )}
          <Summary products={cartProduct.cart} order={order} totalPrice={totalPrice} setCheckout={setCheckout}/>
        </div>
        {checkout && <Checkout order={order} totalPrice={totalPrice} setCheckout={setCheckout}/> }
        <CircularProgressLoading loading={loading} />
      </div>
    </div>
  );
};

export default Cart;
