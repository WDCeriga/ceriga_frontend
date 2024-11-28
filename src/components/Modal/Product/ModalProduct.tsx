import { FC, MouseEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CloseIcon, ErrorIcon } from "@common/Icons/CommonIcon";
import { AppDispatch, RootState } from "@redux/store";
import { closeModal } from "@redux/slices/ui";
import { clearOpenProduct, getProductInfo } from "@redux/slices/products";
import { createNewOrder } from "@redux/slices/order";
import { resetColors } from "@redux/slices/colors";
import routes from "@routes/index";

import s from "./modalProduct.module.scss";

const ModalProduct: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useSelector((state: RootState) => state.ui.modal);
  const { productOpen: product } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    dispatch(getProductInfo(productId || ""));
  }, [productId, dispatch]);

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleCloseModal = () => {
    dispatch(clearOpenProduct());
    dispatch(resetColors());
    dispatch(closeModal());
  };

  const handleCreateNewOrder = () => {
    dispatch(resetColors());
    product && dispatch(createNewOrder({ productType: product.categories[0] }));
    navigate(routes.order);
  };

  if (!product) {
    return null;
  }
  const imgSrc = `${routes.server.base}${
    product.images && product.images[0]
      ? product.images[0]
      : routes.server.products.defaultImg
  }`;

  return (
    <div onClick={handleModalClick} className={s.modal}>
      <div className={s.modal_left}>
        <ErrorIcon width="20px" height="20px" color="#C80F0F" />
        {product && (
          <img
            crossOrigin="anonymous"
            className={s.modal_left_img}
            src={imgSrc}
            alt={product.name}
          />
        )}
      </div>
      <div className={s.modal_right}>
        {product && (
          <>
            <div className={s.modal_right_top}>
              <h2 className={s.modal_right_top_title}>{product.name}</h2>
              <button
                onClick={handleCloseModal}
                className={s.modal_right_top_btn}
              >
                <CloseIcon width="22" height="22" color="#111" />
              </button>
            </div>
            <button
              onClick={handleCreateNewOrder}
              className={s.modal_right_btn}
            >
              Start Designing
            </button>
            <ul className={s.modal_right_list}>
              <li className={s.item}>
                <p className={s.item_left}>MOQ</p>
                <p className={s.item_right}>{product.moq}</p>
              </li>
              <li className={s.item}>
                <p className={s.item_left}>Starting price</p>
                <p className={s.item_right}>${product.startingPrice}</p>
              </li>
              <li className={s.item}>
                <p className={s.item_left}>Fabric</p>
                <p className={s.item_right}>
                  {product.fabric
                    .map(
                      (fabric) =>
                        `${fabric.type} (€${fabric.cost.toFixed(2)} each)`
                    )
                    .join(", ")}
                </p>
              </li>
              <li className={s.item}>
                <p className={s.item_left}>Color options</p>
                <p className={s.item_right}>
                  {`Up to ${product.colorOptions} colors, additional colors €${product.additionalColorCost} each`}
                </p>
              </li>
              <li className={s.item}>
                <p className={s.item_left}>Lead time</p>
                <p className={s.item_right}>{product.leadTime}</p>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalProduct;
