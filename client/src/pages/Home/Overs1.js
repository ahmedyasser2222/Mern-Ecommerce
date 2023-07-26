import { Container } from "@mui/material";
import React from "react";

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
];

const Card = ({ image }) => (
  <div className="card">
    <img src={image} />
  </div>
);

const Overs1 = () => {
  return (
    <div className="overs1 container-app">
      <div className="container">
        <div className="image">
          <img src="https://f.nooncdn.com/mpcms/EN0003/assets/37e01f59-dd72-4eb0-889b-5a85e3e152d7.png?format=avifundefined" />
        </div>
        <div className="cards ">
          {list.map((item, index) => (
            <Card image={item.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overs1;
