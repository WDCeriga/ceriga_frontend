import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeParamShipping } from "@redux/slices/editShipping";
import { CloseIcon } from "@common/Icons/CommonIcon";
import { AppDispatch } from "@redux/store";
import { editShippingField } from "@interfaces/bll/editShipping.interface";

import TrackingForm from "./Item/Item";
import s from "./content.module.scss";

interface IEditShippingContent {
  tracking: string | null;
  trackingUrl: string | null;
  carriers: string | null;
  id: string | undefined;
}

const EditShippingContent: FC<IEditShippingContent> = ({
  tracking,
  trackingUrl,
  carriers,
  id,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCloseEditor = () => {
    navigate(-1);
  };
  if (!id) {
    navigate(-1);
  }
  const handleChangeParam = (field: editShippingField, value: string) => {
    dispatch(changeParamShipping({ field, value }));
  };
  return (
    <div className={s.content}>
      <div className={s.content_top}>
        <button onClick={handleCloseEditor} className={s.content_top_closeBtn}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>
      <div className={s.content_middle}>
        <TrackingForm
          field="tracking"
          label="Tracking URL"
          value={tracking}
          handleChange={handleChangeParam}
        >
          <p className={s.content_description}>
            Enter the tracking page link for this order.
          </p>
        </TrackingForm>
        <TrackingForm
          field="trackingUrl"
          label="Tracking Number"
          value={trackingUrl}
          handleChange={handleChangeParam}
        />
      </div>
      <div className={s.content_bottom}>
        <TrackingForm
          field="carriers"
          label="Carrier"
          value={carriers}
          handleChange={handleChangeParam}
        >
          <label className={s.content_label}>
            <input className={s.content_label_input} type="checkbox" />
            <p className={s.content_description}>
              Send notification email to customer
            </p>
          </label>
        </TrackingForm>
      </div>
    </div>
  );
};

export default EditShippingContent;
