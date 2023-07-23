import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import registerValidationSchema, { initialValues } from "./data.js";
import "./style.scss";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import CircularProgressLoading from "../../CircularProgressLoading/index.js";
import { setToast } from "../../../redux/slices/toastSlice.js";
import { URL } from "../../../API";
import axios from "axios";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSumbit = async (values) => {
    console.log(values)
    try {
      setLoading(true);
      const res = await axios.post(`${URL}/api/v1/password/forgot`, values);
      setLoading(false);

      dispatch(
        setToast({
          open: true,
          text: `Hello ${res.data.message}`,
          mode: "success",
        })
      );

      navigate("/");
    } catch (err) {
      console.log(err)
      setLoading(false);
      dispatch(
        setToast({
          open: true,
          text: `Error ,${err.response.data.message}`,
          mode: "error",
        })
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => handleSumbit(values),
  });

  return (
    <div className="forget-password">
      <div className="">
        <form className="forget-password-wraper" onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button variant="outlined" type="submit">
            Send
          </Button>
        </form>
      </div>
      <CircularProgressLoading loading={loading} />
    </div>
  );
};

export default ForgetPassword;
