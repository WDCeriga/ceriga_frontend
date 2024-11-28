import { FC } from "react";
import { useParams } from "react-router-dom";

import OrderPreview from "@components/Order/Preview/Preview";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const OrderPreviewPage:FC = () => { 
  const {id} = useParams()
  return (
    <WithoutSidebarLayout background="#FFF" title="Order Preview">
      <OrderPreview isOrder={true} id={id}/> 
    </WithoutSidebarLayout>
  )
}

export default OrderPreviewPage