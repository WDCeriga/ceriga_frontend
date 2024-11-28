import { IlistItem } from "@interfaces/HowItWorks.interfaces";

const listStorage: IlistItem[] = [
  {
    type: "photo",
    url: "photo1.jpeg",
  },
  {
    type: "text",
    step: 1,
    title: "Pick a product",
    text: "Choose from our products list",
  },
  {
    type: "text",
    step: 2,
    title: "Customize your product",
    text: "Use our built-in tools to customize your product",
  },
  {
    type: "photo",
    url: "photo2.jpeg",
  },
  {
    type: "photo",
    url: "photo3.jpeg",
  },
  {
    type: "text",
    step: 3,
    title: "Order the product",
    text: "Sit tight while we fulfill and ship your order",
  },
];

export {listStorage}