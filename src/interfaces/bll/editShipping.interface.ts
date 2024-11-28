export interface IShippingValues {
  tracking: string | null;
  trackingUrl: string | null;
  carriers: string | null;
}
export interface IEditShippingState extends IShippingValues {
  isUploaded: boolean;
  sendNotification: boolean;
}

export type editShippingField = "tracking" | "trackingUrl" | "carriers";
