import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@redux/store";

const FadingImg: FC = () => {
  const { productType, fading } = useSelector(
    (state: RootState) => state.order
  );
  const { type } = fading;
  if (productType === "Sweat Pants") {
    return (
      <>
        <img

          style={{
            marginTop: "-5vw",
            maxWidth: "60%",
            height: "auto",
            marginLeft: "25%"
          }}
          src={`/img/fading/${productType}/${type}.png`}
          alt={`${productType} - ${type}`}
        />
      </>
    );
  } if (productType === "Uncuffed") {
    return (
      <>
        <img

          style={{
            marginTop: "-5vw",
            maxWidth: "60%",
            height: "auto",
            marginLeft: "25%"
          }}
          src={`/img/fading/${productType}/${type}.png`}
          alt={`${productType} - ${type}`}
        />
      </>
    );
  }
  return (
    <>
      <img

        style={{
          marginTop: "-10vw",
          maxWidth: "100%",
          height: "90%",
        }}
        src={`/img/fading/${productType}/${type}.png`}
        alt={`${productType} - ${type}`}
      />
    </>
  );
};

export default FadingImg;
