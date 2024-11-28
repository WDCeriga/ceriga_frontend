import {
  changeInvoiceValue,
  getAllOrders,
  getInvoiceOrder,
  getOrderListInAdmin,
  getTotalCountInOrder,
} from "@redux/slices/adminOrders";
import {
  confirmInvoiceApi,
  setInvoiceForOrderApi,
} from "@api/requests/protected";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { AppDispatch, RootState } from "@redux/store";
import { IInvoice } from "@interfaces/Invoice.interface";
import PreviewForAdmin from "@components/PreviewForAdmin/PreviewForAdmin";
import Title from "@common/Title/Title";

import InvoiceContent from "./Content/Content";
import s from "./invoice.module.scss";

const InvoiceAdmin: FC = () => {
  const [page, setPage] = useState<"invoice" | "preview">("preview");
  const { role, manufacturer } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { invoiceOrder, totalCount } = useSelector(
    (state: RootState) => state.adminOrders
  );
  useEffect(() => {
    dispatch(getInvoiceOrder(id || ""));
  }, [dispatch, id]);
  if (totalCount === null) {
    dispatch(getTotalCountInOrder(id || ""));
  }

  const handleGenerateTotalAmount = () => {
    if (invoiceOrder !== null && totalCount !== null) {
      const unitCost = Number(invoiceOrder.unitCost) || 0;
      const colourCost = Number(invoiceOrder.colourCost) || 0;
      const packagingCost = Number(invoiceOrder.packagingCost) || 0;
      const shippingCost = Number(invoiceOrder.shippingCost) || 0;

      const cost: number = unitCost + colourCost + packagingCost;
      dispatch(
        changeInvoiceValue({
          name: "totalPrice",
          value: `${cost * totalCount + shippingCost}`,
        })
      );
    }
  };
  handleGenerateTotalAmount();
  const handleUpdateInvoice = (nameField: keyof IInvoice, value: string) => {
    dispatch(changeInvoiceValue({ name: nameField, value }));
    handleGenerateTotalAmount();
  };
  const handleSubmitInvoice = async () => {
    invoiceOrder !== null &&
      (await setInvoiceForOrderApi(id || "", invoiceOrder));

    if (role === "superAdmin") {
      confirmInvoiceApi(id || "");
      dispatch(getAllOrders());
    } else {
      dispatch(getOrderListInAdmin(manufacturer || ""));
    }

    navigate(-1);
  };
  useEffect(() => {
    id && dispatch(getInvoiceOrder(id));
  }, [id, dispatch]);
  if (invoiceOrder === null) {
    return null;
  }

  return (
    <section className={s.container}>
      <Title styleText="capitalize" text={page} />
      {page === "preview" ? (
        <>
          <PreviewForAdmin id={id || ""} />
          <button
            onClick={() => {
              setPage("invoice");
            }}
            className={s.button}
          >
            Go to Invoice
          </button>
        </>
      ) : (
        <>
          <InvoiceContent
            invoiceData={invoiceOrder}
            handleUpdateInvoice={handleUpdateInvoice}
          />
          <button onClick={handleSubmitInvoice} className={s.button}>
            {role !== "superAdmin" ? "Submit Invoice" : "Confirm Invoice"}
          </button>
        </>
      )}
    </section>
  );
};

export default InvoiceAdmin;
