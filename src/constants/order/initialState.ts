import { IOrderState } from "@interfaces/bll/order.interface";

export const initialState: IOrderState = {
  draftId: null,
  name: null,
  orderStep: null,
  productType: null,
  dyeStyle: null,
  printing: null,
  color: {
    hex: null,
    path: null,
    description: "",
  },
  material: {
    name: null,
    value: null,
  },
  stitching: {
    type: "",
    description: "",
  },
  fading: {
    type: "",
  },
  neck: {
    noLabels: false,
    type: "",
    additional: {
      color: "",
      material: "",
    },
  },
  package: {
    isPackage: null,
    description: "",
  },
  quantity: {
    type: null,
    list: [
      {
        name: "XXS",
        value: 0,
      },
      {
        name: "XS",
        value: 0,
      },
      {
        name: "S",
        value: 0,
      },
      {
        name: "M",
        value: 0,
      },
      {
        name: "L",
        value: 0,
      },
      {
        name: "XL",
        value: 0,
      },
      {
        name: "XXL",
        value: 0,
      },
    ],
  },
  delivery: {
    companyName: "",
    addressLine: "",
    zipCode: "",
    taxNumber: "",
    bolNumber: "",
    city: "",
    state: "",
    country: null,
    sameAsBilling: false,
    name: "",
    phoneNumber: "",
    email: "",
  },
  designUploads: [],
  labelUploads: [],
  neckUploads: [],
  neckDescription: "",
  packageUploads: [],
  cost: 0,
  subtotal: 0,
  shipping: 0,
  moq: 0,
  createAt: new Date().toISOString(),
  tableSize: [],
  tableType: null,
};
