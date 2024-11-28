import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatDateToMMDDYY } from "@services/dataConverter";
import { AppDispatch } from "@redux/store";
import { continueOrder } from "@redux/slices/order";
import ProductWithColor from "@components/Order/ProductWithColor/ProductWithColor";
import routes from "@routes/index";

import { IDraftCard } from "../../../../interfaces/Draft.interface";
import { CloseIcon, MoreVerticalIcon } from "../../../Common/Icons/CommonIcon";
import DraftItemMenu from "./menu/DraftItemMenu";
import s from "./item.module.scss";

const DraftItem: FC<IDraftCard> = ({ name, id, productType, createAt, color }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleContinueOrder = async () => {
    const res = await dispatch(continueOrder(id));
    if (res.type === "continue-order/fulfilled") {
      navigate(routes.order);
    }
  };
  return (
    <li className={s.draftItem}>
      <div className={s.draftItem_img}>
        <ProductWithColor color={color.hex} product={productType} path={color.path} />
      </div>
      <div className={s.draftItem_right}>
        <div className={s.draftItem_top}>
          <div className={s.draftItem_details}>
            <p className={s.draftItem_text}>{name}</p>
            <p className={s.draftItem_textBold}>{id.slice(0, 8) + "..."}</p>
          </div>
          <div className={s.draftItem_details}>
            <p className={s.draftItem_text}>
              <span className={s.draftItem_textBold}>Date: </span>
              {formatDateToMMDDYY(createAt)}
            </p>
            <p className={s.draftItem_text}>
              <span className={s.draftItem_textBold}>Cloth Type: </span>
              {productType}
            </p>
          </div>
          <div>
            <button onClick={handleToggleMenu} className={s.draftItem_menuBtn}>
              {isOpenMenu ? (
                <CloseIcon width="24" height="24" color="#000" />
              ) : (
                <MoreVerticalIcon width="24" height="24" color="#000" />
              )}
            </button>
            {isOpenMenu && (
              <DraftItemMenu
                handleContinue={handleContinueOrder}
                handleClose={handleToggleMenu}
                id={id}
              />
            )}
          </div>
        </div>
        <button
          onClick={handleContinueOrder}
          className={s.draftItem_continueBtn}
        >
          Continue Order
        </button>
      </div>
    </li>
  );
};

export default DraftItem;
