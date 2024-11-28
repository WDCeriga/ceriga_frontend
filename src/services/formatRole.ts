import { usersRoleWithAllType } from "@interfaces/bll/dashboard.interface";

export const formatRole = (role: usersRoleWithAllType): string => {
  switch (role) {
    case "admin":
      return "Admin";
      break;
    case "superAdmin":
      return "Super Admin";
      break;
    case "user":
      return "User";
      break;
    default:
      return role;
  }
};
