import { IAnalyticsItem } from "@interfaces/Analytics.interface";

export const usersAnalyticsData: IAnalyticsItem[] = [
  {
    text: "Amount of total users ",
    data: [
      { value: 200, color: "#C80F0F" },
      { value: 800, color: "#f5f5f5" },
    ],
  },
  {
    text: "Total active users",
    data: [
      { value: 500, color: "#C80F0F" },
      { value: 500, color: "#f5f5f5" },
    ],
  },
  {
    text: "New users this week",
    data: [
      { value: 5, color: "#C80F0F" },
      { value: 100, color: "#f5f5f5" },
    ],
  },
];
