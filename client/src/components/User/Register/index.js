import React, { useState } from "react";

import "./style.scss";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik, useFormik } from "formik";
import registerValidationSchema from "./data";
import axios from "axios";
import { URL } from "../../../API";
import CircularProgressLoading from "../../CircularProgressLoading";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSumbit = async (valuse) => {
    try {
      setLoading(true);
      const res = await axios.post(`${URL}/api/v1/register`, valuse);
      console.log(res);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => handleSumbit(values),
  });

  return (
    <div className="register">
      <div className="register-wraper">
        <form className="register-wraper" onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            type="text"
            variant="outlined"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
            Register
          </Button>
        </form>
        <p className="text">
          Already have account , <Link to="/login">Login</Link>{" "}
        </p>
      </div>
      <CircularProgressLoading loading={loading} />
    </div>
  );
};

export default Register;
