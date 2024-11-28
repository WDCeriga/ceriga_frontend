import { FC } from "react";
import {Helmet} from "react-helmet"

import MainLayout from "@common/Layouts/Main/Layout";
import CatalogList from "@components/CatalogList/CatalogList";

const Catalog:FC = () => {
  return ( 
    <>
    <Helmet>
      <title>Catalog</title>
    </Helmet>
    <MainLayout>
      <CatalogList/>
    </MainLayout>
    </>
  )
}

export default Catalog