import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, FreeMode } from "swiper/modules";
import { Container } from "@mui/material";

const list = [
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/67082c74-0aee-4cb5-8e1f-6c8c08dab381.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/180b53f7-33e6-4186-a87a-014e4b28b1ed.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/2ebffb65-4f49-4436-98c9-33756b2dee9d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/b2edab8d-a5ae-4021-866f-3bcc2d2ba29d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/81526b06-3484-4ef5-8c20-bfe3a88abcc8.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/b02d3151-e0fe-4ffe-88f0-278d424d1114.gif?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/15e97a3e-9ff5-4f77-b050-9287087c8d3d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/15e97a3e-9ff5-4f77-b050-9287087c8d3d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/b8b1decd-a26a-4140-ad91-9252714b2392.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/5dc0f7f3-8fdd-4c18-b262-98e4e4ba1d34.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/6e9e4e4e-c420-46e8-9af9-34dd1d5af2f1.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/750b2844-821f-4303-a4b0-82037602b52b.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/42a79e42-6956-43a3-b4aa-4d959def759d.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/1ea9e9ae-6042-4855-b8a9-6ab4ee781bd0.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/b02d3151-e0fe-4ffe-88f0-278d424d1114.gif?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/374ca719-cf76-4fb1-af97-d6406f27ae52.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/ffa3cf40-8aff-44ae-b704-6a0f6873f936.png?format=avifundefined",
  },
  {
    image:
      "https://f.nooncdn.com/mpcms/EN0003/assets/99fdc400-56e9-4d9d-aa2d-32038a9708ae.png?format=avifundefined",
  },
];

const Categories = () => {
  return (
    <div className="cats">
      <Swiper
        slidesPerView={8}
        spaceBetween={0}
        pagination={{
          type: "bullets",
        }}
        navigation={true}
        freeMode
        modules={[Pagination, Navigation, FreeMode]}
        className="mySwiper container"
        breakpoints={{
            280: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 5,
            },
          }}
      >
        {list.map((item,index) => (
          <SwiperSlide key={index}>
            <div className="cat">
              <img src={item.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
