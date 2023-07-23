import React, { useState } from "react";

import "./style.scss";
import { Button, TextField } from "@mui/material";
import resetPasswordValidationSchema, { initialValues } from "./data";
import { setToast } from "../../../redux/slices/toastSlice";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import CircularProgressLoading from "../../CircularProgressLoading";
import { URL } from "../../../API";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { emailToken} = useParams()

  const handleSumbit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.put(`${URL}/api/v1/password/reset/${emailToken}`, values);
      setLoading(false);
      
       
      dispatch(
        setToast({
          open: true,
          text: `Successfully`,
          mode: "success",
        })
      );
     navigate("/login")
    } catch (err) {
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
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (values) => handleSumbit(values),
  });

  return (
    <div className="login">
      <div className="login-wraper">
        <form className="login-wraper" onSubmit={formik.handleSubmit}>
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
          <TextField
            id="outlined-basic"
            label="Password Confirm"
            type="password"
            variant="outlined"
            name="passwordConfirm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.passwordConfirm}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />
          <Button variant="outlined" type="submit">
            Reset Password
          </Button>
        </form>
      </div>
      <CircularProgressLoading loading={loading} />
    </div>
  );
};

export default ResetPassword;
