import { FC} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./MostPopularSlider.module.scss";
import { ArrowIcon } from "@common/Icons/CommonIcon";
import Product from "@common/Product/Product";
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

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

const MostPopularSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, 
    centerPadding: '16px', 
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 700,
    responsive: [
      {
        breakpoint: 400, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '16px',
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '16px',
        }
      },
      {
        breakpoint: 1060, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '16px',
        }
      },
      {
        breakpoint: 1365, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '16px',
        }
      },
    ],
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
  };

  const { list } = useSelector((state: RootState) => state.products);
  const { page }: { page: number } = useSelector(
    (state: RootState) => state.ui.mostPopular
  );
  const firstIndex: number = page * 7 - 7;
  return (
    <div className={s.slider}>
      <div className={`${s.wrap} slider-container`}>
        <Slider {...settings}>
          {list.map((item, index) =>
            index >= firstIndex && index < firstIndex + 7 ? (
              <Product key={index} {...item} size="small" />
            ) : null
          )}
        </Slider>
      </div>
    </div>
  );
};


export default MostPopularSlider;
