import { FC, useEffect, useState } from "react";

import { IParamPreviewOrder } from "@interfaces/order/paramsPreview.interface";
import { getOrderItemApi } from "@api/requests/protected";
import { mapOrderStateToParams } from "@services/mapOrderStateToParams ";
import { IOrderState } from "@interfaces/bll/order.interface";
import ParamMainPreview from "@components/Order/Preview/ParamMain/ParamMain";
import ProductWithColor from "@components/Order/ProductWithColor/ProductWithColor";
import SizeTable from "@components/Order/Size/Sizes/Table/Table";
import TitlePreview from "@components/Order/Preview/Title/Title";

import s from "./previewForAdmin.module.scss";

interface IPreviewForAdmin {
  id: string;
}

const PreviewForAdmin: FC<IPreviewForAdmin> = ({ id }) => {
  const [order, setOrder] = useState<IOrderState | null>(null);
  const [orderData, setOrderData] = useState<IParamPreviewOrder[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const data = await getOrderItemApi(id);
        setOrder(data);
        console.log(data);
        const mappedData = await mapOrderStateToParams(data);
        setOrderData(mappedData);
      } catch (err) {
        console.error("Failed to fetch or map order data:", err);
        setError("Failed to load order data.");
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchOrderData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!order || !orderData) {
    return <div>No order data available.</div>;
  }
  return (
    <section className={s.preview}>
      <div
        className={s.preview_left}
        style={{
          paddingTop: "100px",   // Add padding
        }}
      >
        <ProductWithColor
          color={order.color.path || "#333"}
          path={order.color.path}
          product={order.productType || ""}
        />
      </div>
      <div className={s.preview_right}>
        <TitlePreview product={order.productType || ""} />
        <h4 className={s.preview_right_fitSize}>Fit Size</h4>
        <SizeTable isPreview={true} sizes={order.tableSize} />
        <ul className={s.preview_right_list}>
          {orderData &&
            orderData.map((item) => (
              <ParamMainPreview key={item.title} {...item} />
            ))}
        </ul>
      </div>
    </section>
  );
};
export default PreviewForAdmin;
