import { FC, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { createNewDraft, setSubtotal, updateColor } from "@redux/slices/order";
import { updateDraftApi } from "@api/requests/protected";
import { getColorsForProduct } from "@redux/slices/colors";

import OrderColor from "./Color/Color";
import OrderDelivery from "./Delivery/Delivery";
import OrderDesign from "./Design/Design";
import OrderLayout from "./Layout/Layout";
import OrderPackage from "./Package/Package";
import OrderPreview from "./Preview/Preview";
import OrderSize from "./Size/Size";
import s from "./order.module.scss";

const Order: FC = () => {
  const hasCreatedDraft = useRef(false);
  const dispatch = useDispatch<AppDispatch>();
  const { order } = useSelector((state: RootState) => state);
  const { product, list } = useSelector((state: RootState) => state.colors);
  const { orderStep, draftId } = order;

  useEffect(() => {
    if (orderStep === null) {
      window.location.href = "/";
    }
  }, [orderStep]);

  useEffect(() => {
    const handleUpdateOrder = async () => {
      const subtotal = await updateDraftApi(order);
      if (subtotal) {
        dispatch(setSubtotal(subtotal));
      }
    };

    if (draftId === null && !hasCreatedDraft.current) {
      dispatch(createNewDraft({ draft: order }));
      hasCreatedDraft.current = true;
    } else if (draftId) {
      handleUpdateOrder();
    }
  }, [dispatch, order, draftId]);

  useEffect(() => {
    if (product === null && order.productType) {
      dispatch(getColorsForProduct(order.productType));
    }
  }, [dispatch, order.productType, product]);

  useEffect(() => {
    if (list.length > 0 && !order.color.hex) {
      const correctColor = list.find((item) => item.color === "white");
      const correctVariant = correctColor?.types.find(
        (item) => item.name === "Off"
      );

      if (correctVariant) {
        dispatch(
          updateColor({
            colorHex: correctVariant.hexValue,
            path: correctVariant.path,
          })
        );
      }
    }
  }, [dispatch, list, order.color.hex]);

  const renderOrderStep = () => {
    switch (orderStep) {
      case "size":
        return <OrderSize />;
      case "color":
        return <OrderColor />;
      case "design":
        return <OrderDesign />;
      case "package":
        return <OrderPackage />;
      case "delivery":
        return <OrderDelivery />;
      case "preview":
        return <OrderPreview />;
      default:
        return null;
    }
  };

  return (
    <section className={s.content}>
      <OrderLayout>{renderOrderStep()}</OrderLayout>
    </section>
  );
};

export default Order;
