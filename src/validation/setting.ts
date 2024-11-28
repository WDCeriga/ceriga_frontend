import * as Yup from "yup";

const validationSchemaSetting = Yup.object().shape({
  company: Yup.string().min(3).required("Company is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().min(5).required("Address is required"),
});


export {
  validationSchemaSetting
}