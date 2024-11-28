export type quantityName = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL";
export type quantityType = "Bulk" | "Sample Selection"


export interface IQuantityItem {
  name: quantityName;
  value: number;
}
