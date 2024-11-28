import classNames from "classnames";
import { FC } from "react";

import { ISubparametersPreviewOrder } from "@interfaces/order/paramsPreview.interface";

import LinkPreview from "../../Link/Link";
import s from "./subParamItem.module.scss";

const SubParamItemOrderPreview: FC<ISubparametersPreviewOrder> = ({
  title,
  value,
  titleStyle,
  isLink,
  link,
}) => {
  const titleClassnames = classNames(
    s.item_title,
    titleStyle === "bold" && s.item_title__bold
  );
  return (
    <li className={s.item}>
      {title && <h4 className={titleClassnames}>{title}</h4>}
      {isLink ? (
        <LinkPreview link={link} />
      ) : (
        <p className={s.item_text}>{value}</p>
      )}
    </li>
  );
};

export default SubParamItemOrderPreview;
