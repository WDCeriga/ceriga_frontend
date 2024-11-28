import * as Yup from "yup";

const validationSchemaSignIn = Yup.object().shape({
  email: Yup.string().email("Invalid_email").required("Email_is_required"),
  password: Yup.string()
    .required("Password_is_required")
    .min(8, "Password_must_be_at_least_8_characters"),
});

const validationSchemaSignUp = Yup.object().shape({
  name: Yup.string().required("Company_is_required"),
  email: Yup.string().email("Invalid_email").required("Email_is_required"),
  phone: Yup.string()
    .required("Phone_number_is_required")
    .matches(/^\d{9}$/, "Phone_number_must_be_9_digits_long"),
  password: Yup.string()
    .required("Password_is_required")
    .min(8, "Password_must_be_at_least_8_characters"),
  privacyConfirm: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("Required"),
});

const validationSchemaForgotPass = Yup.object().shape({
  email: Yup.string().email("Invalid_email").required("Email_is_required"),
});

const validationSchemaChangePass = Yup.object().shape({
  password: Yup.string()
    .required("Password_is_required")
    .min(8, "Password_must_be_at_least_8_characters"),
  rePassword: Yup.string()
    .required("Confirm_password_is_required")
    .oneOf([Yup.ref("password")], "Password_must_match"),
});

const validationSchemaResetPassword = Yup.object().shape({
  code: Yup.string().length(6).required("Code is required"),
  password: Yup.string()
    .required("Password_is_required")
    .min(8, "Password_must_be_at_least_8_characters"),
  rePassword: Yup.string()
    .required("Confirm_password_is_required")
    .oneOf([Yup.ref("password")], "Password_must_match"),
});

export {
  validationSchemaSignIn,
  validationSchemaSignUp,
  validationSchemaForgotPass,
  validationSchemaChangePass,
  validationSchemaResetPassword,
};
