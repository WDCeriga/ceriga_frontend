import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./AddInfoSlider.module.scss";
import AdditionalCard from "@common/AdditionalCard/AdditionalCard";
import { ICard } from "@interfaces/AdditionalInfo.interface";
import { ArrowIcon } from "@common/Icons/CommonIcon";

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${s.left} `}>
    <ArrowIcon color="#FFF" width="24px" height="24px" type="left" />
  </button>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={`${s.btn} ${s.right} `}>
    <ArrowIcon color="#FFF" width="24px" height="24px" type="right" />
  </button>
  );
};

interface AddInfoSliderProps {
  items: ICard[]; 
}

const AddInfoSlider: FC<AddInfoSliderProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 700,
    responsive: [
      {
        breakpoint: 950, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1364, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ],
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
  };

  return (
    <div className={s.slider}>
      <div className={`${s.wrap} slider-container`}>
        <Slider {...settings}>
          {items.map((item: ICard) => (
            <AdditionalCard key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AddInfoSlider;
