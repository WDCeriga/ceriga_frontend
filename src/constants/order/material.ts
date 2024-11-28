import {
  ClothingGSMOptions,
  IMaterialCard,
  materialTitle,
} from "@interfaces/order/material.interface";

export const materialStore: IMaterialCard[] = [
  {
    title: "Wool",
    list: {
      img: "wool.jpeg",
    },
  },
  {
    title: "100% Cotton",
    list: {
      img: "100PercentCotton.jpeg",
    },
  },
  {
    title: "Fleece 100% cotton",
    list: {
      img: "fleece.jpeg",
    },
  },
  {
    title: "French terry 100% cotton",
    list: {
      img: "frenchTerry.jpeg",
    },
  },
];

export const materialTypesStore: materialTitle[] = [
  "Wool",
  "100% Cotton",
  "Fleece 100% cotton",
  "French terry 100% cotton",
];

export const clothingGSM: ClothingGSMOptions = {
  "T-shirt": [120, 150, 200, 220],
  Hoodie: [300, 350, 400, 450],
  "Zip Up Hoodie": [300, 350, 400, 450],
  Crewneck: [300, 350, 400, 450],
  "Sweat Pants": [300, 350, 400, 450],
  Uncuffed: [300, 350, 400, 450],
  "Tank Top": [60, 80, 100, 120],
};
