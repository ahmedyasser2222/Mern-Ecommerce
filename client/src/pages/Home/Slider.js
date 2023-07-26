import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "./style.scss";

const Slider = () => {
  return (
    <div className="slider-home container-app">
      <Swiper
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        autoplay
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper container"
      >
        <SwiperSlide>
          <div className="div-img">
            <img src="https://f.nooncdn.com/mpcms/EN0003/assets/556cec92-ed17-4d7a-b34f-46742592d4c8.png?format=avifundefined" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-img">
            <img src="https://f.nooncdn.com/mpcms/EN0003/assets/1cb3ecd4-fe49-4b8d-8f0b-361d4d7b8879.png?format=avifundefined" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-img">
            <img src="https://f.nooncdn.com/mpcms/EN0003/assets/51418195-076c-4dd7-8737-b8eece742504.png?format=avifundefined" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="div-img">
            <img src="https://f.nooncdn.com/mpcms/EN0003/assets/a8e2ddae-8520-4b89-9283-521538f89467.png?format=avifundefined" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
