import { IAnalyticsItem } from "@interfaces/Analytics.interface";
import { IAnalyticsRevenue } from "@interfaces/bll/analytics.interface";

export const setDataAnalyticsForRevenue = (
  revenueAnalytics: IAnalyticsRevenue
): IAnalyticsItem[] => {
  return [
    {
      text: "Total revenue",
      data: [{ value: revenueAnalytics.totalRevenue, color: "#C80F0F" }],
    },
    {
      text: "Revenue this month",
      data: [
        { value: revenueAnalytics.revenueThisMonth, color: "#C80F0F" },
        { value: revenueAnalytics.totalRevenue, color: "#f5f5f5" },
      ],
    },
    {
      text: "Revenue this week",
      data: [
        { value: revenueAnalytics.revenueThisWeek, color: "#C80F0F" },
        { value: revenueAnalytics.totalRevenue, color: "#f5f5f5" },
      ],
    },
  ];
};
