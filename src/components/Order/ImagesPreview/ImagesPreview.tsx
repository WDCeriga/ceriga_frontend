import { FC, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getImagesUploadApi } from "@api/requests/protected";
import { DownloadFileIcon } from "@common/Icons/CommonIcon";
import ButtonSelect from "@common/ButtonSelect/ButtonSelect";
import routes from "@routes/index";
import TitleWithDescription from "@common/Title/Description/Description";

import s from "./imagesPreview.module.scss";

const ImagesOrderPreview: FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const navigate = useNavigate();
  const { id, type } = useParams();
  const baseImgUrl = `${routes.server.base}${routes.server.drafts.publicImages}`;

  const imageExtensions = /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i;

  useEffect(() => {
    const fetchImages = async () => {
      if (id && type) {
        const fetchedImages = await getImagesUploadApi(id, type);
        console.log(fetchedImages);
        setImages(fetchedImages);
      }
    };

    fetchImages();
  }, [id, type]);

  const handleMoveBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={s.top}>
        <TitleWithDescription
          title="Images Preview"
          text={`Images type: ${type}`}
        />
        <ButtonSelect onEvent={handleMoveBack} text="Go Back" />
      </div>
      <ul className={s.list}>
        {images.map((image, index) => (
          <li className={s.list_item} key={index}>
            {imageExtensions.test(image) ? (
              <img
                className={s.list_item_img}
                crossOrigin="anonymous"
                src={`${baseImgUrl}/${image}`}
                alt={`Preview ${index + 1}`}
              />
            ) : (
              <Link to={`${baseImgUrl}/${image}`} className={s.filebox}>
                <DownloadFileIcon />
                <p className={s.filebox_name}>{image}</p>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesOrderPreview;
