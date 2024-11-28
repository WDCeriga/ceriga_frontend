import * as Yup from "yup";

export const validationSchemaChangePassword = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters long")
    .matches(/[0-9]/, "New password must contain at least one number")
    .matches(/[a-z]/, "New password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "New password must contain at least one uppercase letter")
    .matches(
      /[@$!%*?&]/,
      "New password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Confirm new password")
    .oneOf([Yup.ref("newPassword")], "Password_must_match"),
});

