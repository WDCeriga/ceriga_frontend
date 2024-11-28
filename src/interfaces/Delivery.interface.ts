import { ICountrySelect } from "./order/delivery.interface";

export type deliveryType =
  | "sameAsBilling"
  | "companyName"
  | "addressLine"
  | "zipCode"
  | "taxNumber"
  | "bolNumber"
  | "city"
  | "state"
  | "country"
  | "name"
  | "phoneNumber"
  | "email";

export interface IDelivery {
  sameAsBilling?: boolean;
  companyName?: string;
  addressLine?: string;
  zipCode?: string;
  taxNumber?: string;
  bolNumber?: string;
  city?: string;
  state?: string;
  country: ICountrySelect | null;
  name?: string;
  phoneNumber?: string;
  email?: string;
}
