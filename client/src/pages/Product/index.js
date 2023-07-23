import React, { useEffect, useState } from "react";
import ImageProduct from "./ImageProduct";
import "./style.scss";
import DetailsProduct from "./DetailsProduct";
import { useParams } from "react-router-dom";
import { URL } from "../../API";
import CircularProgressLoading from "../../components/CircularProgressLoading";
import axios from "axios";

const Product = () => {
  const [data, setData] = useState({
    product: { images: [{ url: "" }], category: { name: "" } , name : "" , price : 0 , stock : 0, description : "" },
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(`${URL}/api/v1/product/${id}`);
        setLoading(false);
        setData(res.data);
      } catch (err) {
        setLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <div className="container-app">
      <div className="container">
        <div>
          <div className="product">
            <ImageProduct images={data.product.images} />
            <DetailsProduct product={data.product} />
          </div>
        </div>
      </div>
      <CircularProgressLoading loading={loading} />
    </div>
  );
};

export default Product;
