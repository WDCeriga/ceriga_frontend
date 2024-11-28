import {
  IAnalyticsOrders,
  IAnalyticsRevenue,
  IAnalyticsState,
  IAnalyticsUsers,
} from "@interfaces/bll/analytics.interface";
import {
  getAnalyticsForOrdersApi,
  getAnalyticsForRevenueApi,
  getAnalyticsForUsersApi,
} from "@api/requests/protected";
import { RootState } from "@redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAnalyticsState = {
  users: {
    isUpload: false,
    totalUsers: 0,
    totalUsersThisWeek: 0,
    totalActiveUsers: 0,
  },
  orders: {
    isUpload: false,
    totalOrders: 0,
    totalOrdersUpdatedThisWeek: 0,
    totalOrdersUpdatedThisMonth: 0,
    totalCompletedOrders: 0,
  },
  revenue: {
    isUpload: false,
    totalRevenue: 0,
    revenueThisWeek: 0,
    revenueThisMonth: 0,
  },
};

export const getAnalyticsForUsers = createAsyncThunk<
  IAnalyticsUsers,
  void,
  { state: RootState }
>("get-analytics-users", async () => {
  const data = await getAnalyticsForUsersApi();
  return data;
});

export const getAnalyticsForOrder = createAsyncThunk<
  IAnalyticsOrders,
  void,
  { state: RootState }
>("get-analytics-orders", async () => {
  const data = await getAnalyticsForOrdersApi();
  return data;
});

export const getAnalyticsForRevenue = createAsyncThunk<
  IAnalyticsRevenue,
  void,
  { state: RootState }
>("get-analytics-revenue", async () => {
  const data = await getAnalyticsForRevenueApi();
  return data;
});

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAnalyticsForUsers.fulfilled,
      (state, { payload }: PayloadAction<IAnalyticsUsers>) => {
        state.users = payload;
        state.users.isUpload = true;
      }
    );
    builder.addCase(
      getAnalyticsForOrder.fulfilled,
      (state, { payload }: PayloadAction<IAnalyticsOrders>) => {
        state.orders = payload;
        state.orders.isUpload = true;
      }
    );
    builder.addCase(
      getAnalyticsForRevenue.fulfilled,
      (state, { payload }: PayloadAction<IAnalyticsRevenue>) => {
        state.revenue = payload;
        state.revenue.isUpload = true;
      }
    );
  },
});

export default analyticsSlice.reducer;
