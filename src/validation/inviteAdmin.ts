import * as Yup from "yup";

const validationSchemaInviteAdmin = Yup.object().shape({
  email: Yup.string().email("Invalid_email").required("Email_is_required"),
  message: Yup.string(),
});

export { validationSchemaInviteAdmin };
