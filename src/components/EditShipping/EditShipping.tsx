import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AppDispatch, RootState } from "@redux/store";
import { getShippingInOrder } from "@redux/slices/editShipping";
import { editShippingInOrderApi } from "@api/requests/protected";
import Button from "@common/Buttons/Red/Button";
import Title from "@common/Title/Title";

import EditShippingContent from "./Content/Content";
import s from "./editShipping.module.scss";

const EditShipping: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { tracking, trackingUrl, carriers } = useSelector(
    (state: RootState) => state.editShipping
  );
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(getShippingInOrder(id));
  }, [dispatch, id]);
  const handleSaveShipping = async () => {
    await editShippingInOrderApi(id || "", { tracking, trackingUrl, carriers });
    navigate(-1);
  };
  return (
    <section className={s.container}>
      <div className={s.container_title}>
        <Title styleText="none" text="Edit Shipping" />
      </div>
      <EditShippingContent
        tracking={tracking}
        trackingUrl={trackingUrl}
        carriers={carriers}
        id={id}
      />
      <div className={s.container_button}>
        <Button handleClick={handleSaveShipping} text="Submit" />
      </div>
    </section>
  );
};

export default EditShipping;
