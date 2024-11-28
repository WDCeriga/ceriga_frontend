import { FC } from "react";

import InvoiceAdmin from "@components/Invoice/Invoice";
import WithoutSidebarLayout from "@common/Layouts/WithoutSidebar/Layout";

const InvoicePage:FC = () => { 
  return ( 
    <WithoutSidebarLayout title="Invoice page">
     <InvoiceAdmin/>
    </WithoutSidebarLayout>
  )
}

export default InvoicePage;