import { FC } from "react";

import { TShirtSvg } from "@common/Icons/Products/TShirt";
import { HoodieSvg } from "@common/Icons/Products/Hoodie";
import { ZipUpHoodieSvg } from "@common/Icons/Products/ZipUpHoodie";
import { CrewneckSvg } from "@common/Icons/Products/Crewneck";
import { TankTopSvg } from "@common/Icons/Products/TankTop";
import { SweatPants } from "@common/Icons/Products/SweatPants";
import { UncuffedSvg } from "@common/Icons/Products/Uncuffed";
import routes from "@routes/index";

import s from "./productWithColor.module.scss";

interface IProductWithColor {
  color: string;
  product: string;
  path: string | null;
}

const ProductWithColor: FC<IProductWithColor> = ({ color, product, path }) => {
  if (path) {
    return (
      <section className={s.container}>
        <img
          crossOrigin="anonymous"
          width="600"
          className={s.container_img}
          src={routes.server.base + path}
          alt={product}
        />
      </section>
    );
  }
  // if (color === "#F8F8F8" || color === "#F1F1F1") {
  //   return (
  //     <section className={s.container}>
  //       <img
  //         className={s.container_img}
  //         src={`/img/productsForColor/white/${product}.png`}
  //         alt={product}
  //       />
  //     </section>
  //   );
  // }
  const iconComponents: { [key: string]: FC } = {
    "Zip Up Hoodie": () => <ZipUpHoodieSvg color={color} />,
    "T-shirt": () => <TShirtSvg color={color} />,
    Hoodie: () => <HoodieSvg color={color} />,
    Crewneck: () => <CrewneckSvg color={color} />,
    "Tank Top": () => <TankTopSvg color={color} />,
    "Sweat Pants": () => <SweatPants color={color} />,
    Uncuffed: () => <UncuffedSvg color={color} />,
  };
  const Icon = iconComponents[product] || null;
  return (
    <section className={s.container}>
      <Icon />
      <img
        className={s.container_img}
        src={`/img/productsForColor/${product}.png`}
        alt={product}
      />
    </section>
  );
};

export default ProductWithColor;
