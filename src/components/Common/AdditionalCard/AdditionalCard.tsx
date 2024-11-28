import { FC } from "react";
import { Link } from "react-router-dom";

import { ICard } from "@interfaces/AdditionalInfo.interface";

import s from "./additionalCard.module.scss";

const AdditionalCard: FC<ICard> = ({ title, imgUrl, contentUrl, type }) => {
  return (
    <Link className={s.globalLink} to={contentUrl}>
      <li className={s.item}>
        <h3 className={s.item_title}>{title}</h3>
        {type === "article" ? (
          <>
            <img className={s.item_img} src={imgUrl} alt={title} />
            <Link className={s.item_link} to={contentUrl}>
              See more
            </Link>
          </>
        ) : (
          <>
            <iframe
              style={{
                borderRadius: "8px",
              }}
              width="383"
              height="215"
              src={contentUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </>
        )}
      </li>
    </Link>
  );
};

export default AdditionalCard;
