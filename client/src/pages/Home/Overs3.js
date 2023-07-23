import { Container } from "@mui/material";
import React from "react";
import CardProduct from "../../components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, FreeMode } from "swiper/modules";

const list = [
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/d25cbf25-3b5b-48e4-b9d7-830e8911911d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/57f1cbed-2a90-4119-95e3-e080bbdaf42b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/a5b1bad7-a345-4b1a-937e-7ad49dbe680b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/e1c91436-8654-4583-bc7a-dae08b2b6bb8.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/222251ec-1493-4d4f-bf23-6527bae8958b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/1d1d25c2-ec60-49e8-8e7b-71d0483712f1.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/79057646-9f68-4622-ab81-3f7d04d03bde.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/fcfdeae6-6bd3-4ee7-b586-2c3319c456ed.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/57f1cbed-2a90-4119-95e3-e080bbdaf42b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/a5b1bad7-a345-4b1a-937e-7ad49dbe680b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/e1c91436-8654-4583-bc7a-dae08b2b6bb8.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/222251ec-1493-4d4f-bf23-6527bae8958b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/1d1d25c2-ec60-49e8-8e7b-71d0483712f1.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/79057646-9f68-4622-ab81-3f7d04d03bde.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/fcfdeae6-6bd3-4ee7-b586-2c3319c456ed.png?format=avifundefined",
  },
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
