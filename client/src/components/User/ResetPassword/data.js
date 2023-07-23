import React from "react";
import * as Yup from "yup";

function equalTo(ref, msg) {
  return Yup.mixed().test({
    name: "equalTo",
    exclusive: false,
    message: msg || "Error",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}
Yup.addMethod(Yup.string, "equalTo", equalTo);

const resetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required("Password is required").min(8).max(20),
  passwordConfirm: Yup.string()
    .equalTo(Yup.ref("password"), "Passwords must match")
    .required("Password confirm is required"),
});

export const initialValues = {
  password: "",
  passwordConfirm: "",
};

export default resetPasswordValidationSchema;
