import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { getInfo, getNotification } from "@redux/slices/user";
import { AppDispatch, RootState } from "@redux/store";
import { getProductsList } from "@redux/slices/products";
import routes from "@routes/index";

import Header from "../../../Header/Header";
import Sidebar from "../../../Sidebar/Sidebar";
import ContentLayout from "../Content/Layout";

interface IMainLayout {
  children?: ReactNode;
  background?: string;
}

const MainLayout: FC<IMainLayout> = ({ children, background }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { role } = useSelector((state: RootState) => state.user);
  const listLength = useSelector(
    (state: RootState) => state.products.list.length
  );
  console.log(location.pathname);
  useEffect(() => {
    if (token && token !== "error") {
      console.log(token);
      dispatch(getInfo());
      dispatch(getNotification());
    }
    if (role === "admin" && location.pathname !== "/notification") {
      navigate(routes.adminOrders);
    }
  }, [token, role, navigate, dispatch, location]);
  useEffect(() => {
    if (listLength === 0) {
      dispatch(getProductsList());
    }
  }, [listLength, dispatch]);

  return (
    <>
      <>
        <Header />
        <Sidebar />
        <div style={{ background }}>
          <ContentLayout>{children}</ContentLayout>
        </div>
      </>
    </>
  );
};

export default MainLayout;
