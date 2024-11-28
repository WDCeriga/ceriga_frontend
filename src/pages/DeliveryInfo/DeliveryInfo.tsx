import { FC } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import DeliveryInfo from "@components/DeliveryInfo/DeliveryInfo";

const DeliveryInfoPage:FC = () => { 
  const {id} = useParams()
  return ( 
    <> 
    <Helmet>
      <title>DeliveryInfo</title>
    </Helmet>
    <DeliveryInfo id={id || ""}/>
    </>
  )
}

export default DeliveryInfoPage