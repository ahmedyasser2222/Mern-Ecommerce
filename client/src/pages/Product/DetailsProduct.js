import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rate from "../../components/Rate";

const DetailsProduct = ({ product }) => {
  const [age, setAge] = React.useState("");
  const [levelSelect, setLevelSelect] = useState([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  /* useEffect(()=>{
    function setLevel(){
      let s = []
      for(let i = 1 ; i <= (product.stock || 1) ; i++){
        s.push({value : i})
      }
      setLevelSelect(s)
    }
    setLevel()
  },[]) */

  return (
    <div className="details-product">
      <h4>{product.category.name}</h4>
      <h1>{product.name}</h1>
      <p className="price">
        <span className="text">Price :</span>
        <span>EGP {product.price}</span>
      </p>
      <p className="descount">
        <span className="text">Descount : </span>
        <span>EGP 180.00</span>
      </p>
      <Rate singleProduct />
      <div className="action ">
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            sx={{ zIndex: "-1" }}
          >
            Quantity
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Quantity"
            onChange={handleChange}
            sx={{ m: 1, minWidth: 100, height: "50px" /* zIndex: "-1" */ }}
          >
            {levelSelect.map((item, index) => (
              <MenuItem value={item.value} key={index}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          sx={{
            backgroundColor: "#551A8B",
            width: "200px",
            height: "50px",
            color: "white",
            zIndex: "-1",
            ":hover": { backgroundColor: "#551A8B", color: "white" },
          }}
        >
          Add to Cart
        </Button>
      </div>
      <div className="desc">
        <Accordion
          sx={{ backgroundColor: "transparent", width: "400px", /* zIndex: "-1" */ }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "transparent" }}
          >
            Description
          </AccordionSummary>
          <AccordionDetails>
             {product.description}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default DetailsProduct;
