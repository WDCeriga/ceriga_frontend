import { INotificationCard } from "@interfaces/Notification.interface";

export type roleType = "user" | "admin" | "superAdmin";

export interface IUserState {
  name: string | null;
  last_name: string | null;
  email: string | null;
  photo: string | null;
  phone: string | null;
  company: string | null;
  address: string | null;
  role: roleType | null;
  notification: {
    count: number;
    list: INotificationCard[];
  };
  manufacturer: string | null;
}
