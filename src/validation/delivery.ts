import * as Yup from "yup";

const validationSchemaDelivery = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  addressLine: Yup.string().required("Address Line is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  taxNumber: Yup.string(), // Removed .required() to make it optional
  bolNumber: Yup.string(), // Removed .required() to make it optional
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State/Province is required"),
  country: Yup.object({
    name: Yup.string().required("Country is required"),
  }),
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\+?[1-9]\d{1,14}$/, "Phone Number must be a valid format"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  sameAsBilling: Yup.boolean(),
});

export default validationSchemaDelivery;
