import { Container } from "@mui/material";
import React from "react";
import CardProduct from "../../components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, FreeMode } from "swiper/modules";

const list = [
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z4D1012785DC1C7040E82Z/45/_/1685694026/595798fc-0951-4432-8a47-270cb0c8e9d7.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/v1634454925/N48658848V_1.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/v1649763287/N53090811V_1.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/v1614670320/N43231820V_1.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/v1565094805/N28975610A_1.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z9E89C879E64AC827B1D1Z/45/_/1674139180/da16d4cb-5b6a-46c3-bea1-0d77e9803713.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z736625010391AE016DCEZ/45/_/1674139152/e3db7a04-c118-41e3-b816-bee493ea2223.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/Z736625010391AE016DCEZ/45/_/1674139152/e3db7a04-c118-41e3-b816-bee493ea2223.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/ZD8D0736132E12CABD86FZ/45/_/1674139171/62ac2102-b0fa-43ce-b4ad-55578f48539b.jpg?format=avif&width=240",
  },
  {
    image:
      "https://f.nooncdn.com/p/pzsku/ZDF87ED2F2C05A3328E4BZ/45/_/1685694048/1a19eefa-19f6-4660-8aa3-f16b61cb36e5.jpg?format=avif&width=240",
  }
  
];

const Card = ({ image }) => (
  <div className="card">
    <img src={image} />
  </div>
);

const Overs3 = () => {
  return (
    <>
      <div className="overs1 container-app">
        <div className="container">
        <div className="image-overs3">
          <img src="https://f.nooncdn.com/mpcms/EN0003/assets/e5cddd40-9b7a-4b70-811c-4c11f624da7a.png?format=avifundefined" />
        </div>

        </div>
      </div>
      <div className="overs1 overs2 overs3 container-app cats">
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          navigation={true}
          freeMode
          modules={[Navigation, FreeMode]}
          className="mySwiper container"
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            280: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 5,
            },
          }}
        >
          {list.map((item) => (
            <SwiperSlide>
              <CardProduct image={item.image}  />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </>
  );
};

export default Overs3;
