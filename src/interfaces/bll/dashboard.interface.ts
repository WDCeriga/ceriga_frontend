export type userRoleType = "superAdmin" | "admin" | "user";
export type usersRoleWithAllType = userRoleType | "All Users";

export interface IUserDashboard {
  _id: string;
  photo?: string;
  name: string;
  last_name: string;
  company: string;
  email: string;
  role: userRoleType;
  manufacturer?: string;
  lastActive?: Date;
  amountOfOrders: number
}

export interface IDashboard {
  users: IUserDashboard[] | [];
  search: string;
  filterByRole: usersRoleWithAllType
}
