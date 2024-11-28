import { IAnalyticsItem } from "@interfaces/Analytics.interface";
import { IAnalyticsUsers } from "@interfaces/bll/analytics.interface";

export const setDataAnalyticsForUsers = (
  usersAnalytics: IAnalyticsUsers
): IAnalyticsItem[] => {
  return [
    {
      text: "Amount of total users ",
      data: [{ value: usersAnalytics.totalUsers, color: "#C80F0F" }],
    },
    {
      text: "Total active users",
      data: [
        { value: usersAnalytics.totalActiveUsers, color: "#C80F0F" },
        { value: usersAnalytics.totalUsers, color: "#f5f5f5" },
      ],
    },
    {
      text: "New users this week",
      data: [
        { value: usersAnalytics.totalUsersThisWeek, color: "#C80F0F" },
        { value: usersAnalytics.totalUsers, color: "#f5f5f5" },
      ],
    },
  ];
};
