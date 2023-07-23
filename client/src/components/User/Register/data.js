import React from "react"
import * as Yup from "yup"

const registerValidationSchema = Yup.object().shape({
    name : Yup.string().required("Name is Required"),
    email : Yup.string().email("Invaild Email").required("Email is Required"),
    password : Yup.string().required("Password is Required").min(8).max(20)
})

export default registerValidationSchema;