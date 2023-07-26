import React, { useState } from "react";

import "./style.scss";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import registerValidationSchema , {initialValues} from "./data";
import { useFormik } from "formik";
import { URL } from "../../../API";
import axios from "axios";
import CircularProgressLoading from "../../CircularProgressLoading";
import { setUser } from "../../../redux/slices/userSlices";
import { setToast } from "../../../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import "../style.scss";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const handleSumbit = async (valuse) => {
    try {
      setLoading(true);
      const res = await axios.post(`${URL}/api/v1/login`, valuse);
      setLoading(false);

      dispatch(setToast({open : true , text : `Hello ${res.data.user.name}` , mode : "success" }))
      dispatch(setUser(res.data.user));

      Cookies.set("token", res.data.token, { expires: 1 });
      navigate("/");
      
    } catch (err) {
       setLoading(false);
       dispatch(setToast({open : true , text : `Error ,${err.response.data.message }` , mode : "error" }))
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => handleSumbit(values),
  });

  return (
    <div className="login">
      <div className="login-wraper">
        <form className="login-wraper" onSubmit={formik.handleSubmit}>
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

          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
        <Link to="/password/forget">Forget Password ?</Link>
        <hr />
        <p className="text">
          Create Account , <Link to="/register">register</Link>{" "}
        </p>
      </div>
      <CircularProgressLoading loading={loading} />
    </div>
  );
};

export default Login;
