import * as Yup from "yup";

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const validationSchemaSignUp = Yup.object().shape({
  name: Yup.string().required("Company is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/\d{9}$/, "Phone number must be 9 digits long"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  privacyConfirm: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});

const validationSchemaForgotPass = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const validationSchemaChangePass = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  rePassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

const validationSchemaResetPassword = Yup.object().shape({
  code: Yup.string().length(6).required("Code is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 */haracters"),
  rePassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export {
  validationSchemaSignIn,
  validationSchemaSignUp,
  validationSchemaForgotPass,
  validationSchemaChangePass,
  validationSchemaResetPassword,
};
