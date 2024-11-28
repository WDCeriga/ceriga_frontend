import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDeliveryInfoApi } from "@api/requests/protected";
import Button from "@common/Buttons/Red/Button";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

import s from "./deliveryInfo.module.scss";

interface IDeliveryInfoComponent {
  id: string;
}

interface IDeliveryInfo {
  addressLine: string;
  bolNumber: string;
  city: string;
  companyName: string;
  country: {
    code: string;
    name: string;
  };
  email: string;
  name: string;
  phoneNumber: string;
  sameAsBilling: boolean;
  state: string;
  taxNumber: string;
  zipCode: string;
}

const DeliveryInfo: FC<IDeliveryInfoComponent> = ({ id }) => {
  const navigate = useNavigate();
  const [deliveryData, setDeliveryData] = useState<IDeliveryInfo | null>(null);

  useEffect(() => {
    const getDeliveryData = async () => {
      const data = await getDeliveryInfoApi(id);
      console.log(data);
      if (data) {
        setDeliveryData(data);
      }
    };
    getDeliveryData();
  }, [id]);

  return (
    <WithoutSidebarLayout title="Delivery Information">
      <section className={s.container}>
        <div className={s.content}>
          <h1 className={s.content_title}>Delivery Information</h1>
          {deliveryData ? (
            <ul className={s.content_list}>
              <li className={s.content_list_item}>
                <strong>Name:</strong> {deliveryData.name}
              </li>
              <li className={s.content_list_item}>
                <strong>Email:</strong> {deliveryData.email}
              </li>
              <li className={s.content_list_item}>
                <strong>Phone Number:</strong> {deliveryData.phoneNumber}
              </li>
              <li className={s.content_list_item}>
                <strong>Company Name:</strong> {deliveryData.companyName}
              </li>
              <li className={s.content_list_item}>
                <strong>Address Line:</strong> {deliveryData.addressLine}
              </li>
              <li className={s.content_list_item}>
                <strong>City:</strong> {deliveryData.city}
              </li>
              <li className={s.content_list_item}>
                <strong>State:</strong> {deliveryData.state}
              </li>
              <li className={s.content_list_item}>
                <strong>Zip Code:</strong> {deliveryData.zipCode}
              </li>
              <li className={s.content_list_item}>
                <strong>Country:</strong> {deliveryData.country.name} (
                {deliveryData.country.code})
              </li>
              <li className={s.content_list_item}>
                <strong>Tax Number:</strong> {deliveryData.taxNumber}
              </li>
              <li className={s.content_list_item}>
                <strong>Bill of Lading Number:</strong> {deliveryData.bolNumber}
              </li>
              <li className={s.content_list_item}>
                <strong>Same as Billing:</strong>{" "}
                {deliveryData.sameAsBilling ? "Yes" : "No"}
              </li>
            </ul>
          ) : (
            <p className={s.content_text}>Loading delivery information...</p>
          )}
          <Button handleClick={() => { navigate(-1) }} text="Move back" />
        </div>

      </section>
    </WithoutSidebarLayout>
  );
};

export default DeliveryInfo;
