import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, FreeMode } from "swiper/modules";
import "./style.scss";
import ReactImageMagnify from "react-image-magnify";

const CardList = ({ seleced, image, num, photoNum, setPhotoNum }) => {
  const [select, setSelect] = useState(false);
  if (seleced) setSelect(true);
  return (
    <div
      className={`card-list ${photoNum == num && "select"}`}
      onClick={() => setPhotoNum(num)}
    >
      <img src={image} />
    </div>
  );
};

const list = [
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z4D1012785DC1C7040E82Z/45/_/1685694026/595798fc-0951-4432-8a47-270cb0c8e9d7.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z4D1012785DC1C7040E82Z/45/_/1685694027/4c24a5fa-9d03-46db-b2a1-b13fa5e79482.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z4D1012785DC1C7040E82Z/45/_/1685694028/a5d10f8a-1026-489b-b480-52998f9f4064.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z4D1012785DC1C7040E82Z/45/_/1685694027/01d53bc3-881e-487d-b977-bc8be9149d2c.jpg?format=avif&width=240",
  },
];

const ImageProduct = ({ images = [ { url : "https://media.taager.com/360x360/05f7c5fb-e19a-4341-9226-226dd61811e6.jpg" } ] }) => {
  const [photoNum, setPhotoNum] = useState(0);

  return (
    <div className="image-product">
      <div className="list-images">
        {images.map((item, index) => (
          <CardList
            image={item.url}
            key={index}
            num={index}
            photoNum={photoNum}
            setPhotoNum={setPhotoNum}
          />
        ))}
      </div>
      <div className="div-img" >
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "",
            isFluidWidth: true,
            src: images[photoNum].url,
           
          },
          largeImage: {
            src: images[photoNum].url,
            width: 1200,
            height: 1800,
          },
        }}
        
      />
      </div>
    </div>
  );
};

export default ImageProduct;
