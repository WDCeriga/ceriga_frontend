import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PrivateAdminRoutes from "guard/AdminRoutes/AdminRoutes";
import PrivateSuperAdminRoutes from "guard/SuperAdminRoutes/SuperAdminRoutes";
import { FC } from "react";

import AdminDashboard from "@pages/Admins/Dashboard/Dashboard";
import AdminOrdersPage from "@pages/Admins/Orders/Orders";
import CatalogPage from "@pages/Catalog/Catalog";
import ChangePasswordPage from "@pages/ChangePassword/ChangePassword";
import ChangePricePage from "@pages/Admins/ChangePrice/ChangePrice";
import DeliveryInfoPage from "@pages/DeliveryInfo/DeliveryInfo";
import DraftsPage from "@pages/Drafts/Drafts";
import EditShippingPage from "@pages/Admins/EditShipping/EditShipping";
import EntryResetCodePage from "@pages/EntryResetCode/EntryResetCode";
import InvoicePage from "@pages/Admins/Invoice/Invoice";
import MainPage from "@pages/Main/Main";
import NotificationPage from "@pages/Notification/Notification";
import OrderImages from "@pages/Order/OrderImages";
import OrderPage from "@pages/Order/Order";
import OrderPreviewPage from "@pages/OrderPreview/OrderPreview";
import OrdersPage from "@pages/Orders/Orders";
import ResetPasswordPage from "@pages/ResetPassword/ResetPassword";
import SettingPage from "@pages/Setting/Settings";
import SignInPage from "@pages/SignIn/SignIn";
import SignUpPage from "@pages/signUp/signUp";
import StatisticsPage from "@pages/Statistics/Statistics";

import ConfirmAuthPage from "./components/Auth/ConfirmAuth/ConfirmAuth";
import PrivateRoutes from "./guard/PrivateRoutes/PrivateRoutes";
import TestComponents from "./pages/TestComponents/TestComponents";
import routes from "./routes";

import "./App.css";

// Set up the router with the base URL
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.index} element={<MainPage />} />
      <Route path={routes.catalog} element={<CatalogPage />} />

      <Route path="/test-components" element={<TestComponents />} />
      <Route path={routes.auth}>
        <Route path="" element={<Navigate to="/auth/sign-in" />} />
        <Route path={routes.signIn} element={<SignInPage />} />
        <Route path={routes.signUp} element={<SignUpPage />} />
        <Route path={routes.resetPassword} element={<ResetPasswordPage />} />
        <Route path={routes.confirmSocial} element={<ConfirmAuthPage />} />
        <Route path={routes.entryCode} element={<EntryResetCodePage />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path={routes.drafts} element={<DraftsPage />} />
        <Route path={routes.notification} element={<NotificationPage />} />
        <Route path={routes.changePassword} element={<ChangePasswordPage />} />
        <Route path={routes.setting} element={<SettingPage />} />
        <Route path={routes.orders} element={<OrdersPage />} />

        <Route path={routes.order}>
          <Route path="" element={<OrderPage />} />
          <Route path={routes.images} element={<OrderImages />} />
        </Route>
        <Route path={routes.pay.baseUrl}>
          <Route
            path={routes.pay.success.router}
            element={<h1>Success pay</h1>}
          />
          <Route
            path={routes.pay.cancel.router}
            element={<h1>Cancel pay</h1>}
          />
          <Route path="*" element={<Navigate to={routes.index} />} />
        </Route>
        <Route path={routes.orderPreview} element={<OrderPreviewPage />} />
      </Route>
      <Route element={<PrivateSuperAdminRoutes />}>
        <Route path={routes.adminDashboard} element={<AdminDashboard />} />
        <Route path={routes.statistics} element={<StatisticsPage />} />
        <Route path={routes.changePrice} element={<ChangePricePage />} />
      </Route>
      <Route element={<PrivateAdminRoutes />}>
        <Route path={routes.adminInvoice.route} element={<InvoicePage />} />
        <Route
          path={routes.editShipping.router}
          element={<EditShippingPage />}
        />
        <Route
          path={`${routes.deliveryInfo}/:id`}
          element={<DeliveryInfoPage />}
        />
        <Route path={routes.adminOrders} element={<AdminOrdersPage />} />
      </Route>
    </>
  ),
  {
    basename: "/",
  }
);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
