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

  useEffect(() => {
    const fetchOrderData = async () => {
      const data = await getOrderItemApi(id);
      setOrder(data);
      setOrderData(mapOrderStateToParams(data));
    };
    if (orderData === null) {
      fetchOrderData();
    }
  }, [id, orderData]);
  if (order === null) {
    return null;
  }
  return (
    <section className={s.preview}>
      <div className={s.preview_left}>
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
