import {
  IUserDashboard,
  usersRoleWithAllType,
} from "@interfaces/bll/dashboard.interface";

export const filterUsersBySearch = (
  users: IUserDashboard[],
  searchValue: string
): IUserDashboard[] => {
  if (!searchValue) return users;

  const lowerCaseSearchValue = searchValue.toLowerCase();

  return users.filter((user) => {
    const matchesEmail = user.email
      .toLowerCase()
      .includes(lowerCaseSearchValue);
    const matchesLastName = user.last_name
      ?.toLowerCase()
      .includes(lowerCaseSearchValue);
    const matchesName = user.name?.toLowerCase().includes(lowerCaseSearchValue);

    return matchesEmail || matchesLastName || matchesName;
  });
};

export const filterUsersByRole = (
  users: IUserDashboard[],
  role: usersRoleWithAllType
): IUserDashboard[] => {
  return role === "All Users"
    ? users
    : users.filter((user) => user.role === role);
};
