import React from "react"
import * as Yup from "yup"

const registerValidationSchema = Yup.object().shape({
    email : Yup.string().email("Invaild Email").required("Email is Required")
})

export const initialValues = {
    email: "",
  };

export default registerValidationSchema;