import { configureStore } from "@reduxjs/toolkit";

import adminOrders from "./slices/adminOrders";
import analytics from "./slices/analytics";
import auth from "./slices/auth";
import colors from "./slices/colors";
import dashboard from "./slices/dashboard";
import drafts from "./slices/drafts";
import editShipping from "./slices/editShipping";
import messageSender from "./slices/messageSender";
import order from "./slices/order";
import orders from "./slices/orders";
import products from "./slices/products";
import ui from "./slices/ui";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    auth,
    user,
    ui,
    order,
    orders,
    dashboard,
    products,
    drafts,
    adminOrders,
    editShipping,
    analytics,
    messageSender,
    colors,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
