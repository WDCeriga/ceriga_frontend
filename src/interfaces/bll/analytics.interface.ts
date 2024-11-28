export interface IAnalyticsUsers {
  isUpload: boolean;
  totalUsers: number;
  totalUsersThisWeek: number;
  totalActiveUsers: number;
}

export interface IAnalyticsOrders {
  isUpload: boolean;
  totalOrders: number;
  totalOrdersUpdatedThisWeek: number;
  totalOrdersUpdatedThisMonth: number;
  totalCompletedOrders: number;
}

export interface IAnalyticsRevenue {
  isUpload: boolean;
  totalRevenue: number;
  revenueThisWeek: number;
  revenueThisMonth: number;
}

export interface IAnalyticsState {
  users: IAnalyticsUsers;
  orders: IAnalyticsOrders;
  revenue: IAnalyticsRevenue;
}
