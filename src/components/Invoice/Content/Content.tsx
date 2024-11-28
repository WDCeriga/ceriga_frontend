import { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CloseIcon } from "@common/Icons/CommonIcon";
import { IInvoice } from "@interfaces/Invoice.interface";
import { AppDispatch } from "@redux/store";
import { resetAdminOrderList } from "@redux/slices/adminOrders";

import LabelItemInvoice from "./Label/Label";
import s from "./content.module.scss";

interface IInvoiceContent {
  invoiceData: IInvoice;
  handleUpdateInvoice: (nameField: keyof IInvoice, value: string) => void;
}

const InvoiceContent: FC<IInvoiceContent> = ({
  invoiceData,
  handleUpdateInvoice,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
    dispatch(resetAdminOrderList())
  };
  return (
    <div className={s.content}>
      <div className={s.content_top}>
        <button onClick={handleGoBack} className={s.content_top_closeBtn}>
          <CloseIcon width="22" height="22" color="#111" />
        </button>
      </div>
      <h2 className={s.content_title}>11348779</h2>
      <ul className={s.content_list}>
        <LabelItemInvoice
          name={"unitCost"}
          value={invoiceData.unitCost}
          handleUpdate={handleUpdateInvoice}
          label="Units Cost"
        />
        <LabelItemInvoice
          name={"colourCost"}
          value={invoiceData.colourCost}
          handleUpdate={handleUpdateInvoice}
          label="Colour Cost"
        />
        <LabelItemInvoice
          name={"packagingCost"}
          value={invoiceData.packagingCost}
          handleUpdate={handleUpdateInvoice}
          label="Packaging Cost"
        />
        <LabelItemInvoice
          name={"shippingCost"}
          value={invoiceData.shippingCost}
          handleUpdate={handleUpdateInvoice}
          label="Shipping Cost"
        />
        <LabelItemInvoice
          name={"totalPrice"}
          value={invoiceData.totalPrice}
         
          label="Total Cost"
        />
      </ul>
    </div>
  );
};

export default InvoiceContent;
