import React from "react";
import CardProduct from "../../components/CardProduct";
import CustomPagination from "../../components/CustomPagination";

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

const CardsProducts = ({products = [], productsCount}) => {
  return (
    <div className="cards">
      <div className="data-result">
        <p>{productsCount} Results</p>
      </div>
      <div className="cards-products">
        {products.map((item,index) => (
          <CardProduct product={item} key={index} />
        ))}
      </div>
      <div className="pagination">
        <CustomPagination />
      </div>
    </div>
  );
};

export default CardsProducts;
