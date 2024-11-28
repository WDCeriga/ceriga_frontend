import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "@redux/store";
import { mapOrderStateToParams } from "@services/mapOrderStateToParams ";
import { changeOrderStep } from "@redux/slices/order";
import { createOrderApi, getOrderItemApi } from "@api/requests/protected";
import { IParamPreviewOrder } from "@interfaces/order/paramsPreview.interface";
import ButtonSelect from "@common/ButtonSelect/ButtonSelect";
import formatCost from "@services/ formatCost";
import notification from "@services/notification";
import routes from "@routes/index";
import TitleWithDescription from "@common/Title/Description/Description";

import ButtonsOrder from "../Buttons/Buttons";
import ProductWithColor from "../ProductWithColor/ProductWithColor";
import ParamMainPreview from "./ParamMain/ParamMain";
import ParamPreviewSmall from "./ParamSmall/ParamSmall";
import TitlePreview from "./Title/Title";
import s from "./preview.module.scss";

interface IOrderPreview {
  isOrder?: boolean;
  id?: string;
}

const OrderPreview: FC<IOrderPreview> = ({ isOrder, id }) => {
  const [photo, setPhoto] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [previewData, setPreviewData] = useState<IParamPreviewOrder[] | null>(
    null
  );
  const { order } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchOrderData = async () => {
      if (isOrder && id) {
        const data = await getOrderItemApi(id);
        setPhoto(data.productType || "");
        setColor(data.color.hex);
        setPreviewData(mapOrderStateToParams(data));
      } else if (previewData === null) {
        setPhoto(order.productType || "");
        setColor(order.color.hex || "#333");
        setPreviewData(mapOrderStateToParams(order));
      }
    };
    fetchOrderData();
  }, [isOrder, id, order, previewData]);

  const handlePrevStep = () => {
    if (!isOrder) {
      dispatch(changeOrderStep("delivery"));
    }
  };

  const handleRedirectProducts = () => {
    navigate(routes.catalog);
  };

  const handleFinishOrder = async () => {
    if (order.draftId) {
      try {
        const response = await createOrderApi(order.draftId);
        if (response.status === 200) {
          navigate(routes.orders);
        } else {
          notification.error("Error creating order");
          console.error("Error creating order", response);
        }
      } catch (error) {
        notification.error("Failed to create order");
        console.error("Order creation failed", error);
      }
    }
  };

  if (previewData === null) {
    return null;
  }

  return (
    <div className={s.container}>
      <div className={s.top}>
        <TitleWithDescription title="Order Preview" text="" />
        <ButtonSelect
          onEvent={handleRedirectProducts}
          text="Configure another product"
        />
      </div>
      <section className={s.preview}>
        <div className={s.preview_left}>
          <ProductWithColor color={color} product={photo}  path={order.color.path}/>
          <ul className={s.preview_left_list}>
            <ParamPreviewSmall
              name="Subtotal"
              value={`${formatCost(order.subtotal)} $`}
            />
            <ParamPreviewSmall name="Shipping" value="0 $" />
            <ParamPreviewSmall
              name="Total"
              value={`${formatCost(order.subtotal)} $`}
            />
            <ParamPreviewSmall name="Production time" value="6 business days" />
          </ul>
        </div>
        <div className={s.preview_right}>
          <TitlePreview product={order.productType || ""} />
          <ul className={s.preview_right_list}>
            {previewData.map((item) => (
              <ParamMainPreview key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </section>
      <div>
        {!isOrder && (
          <ButtonsOrder
            onlyNext={false}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleFinishOrder}
            isFinish={true}
            isHaveNext={true}
          />
        )}
      </div>
    </div>
  );
};

export default OrderPreview;
