import { FC } from "react";
import { Helmet } from "react-helmet";

import MainLayout from "@common/Layouts/Main/Layout";
import Drafts from "@components/Drafts/Drafts";

const DraftsPage:FC = () => { 
  return (
    <>
    <Helmet>
      <title>My Drafts</title>
    </Helmet>
    <MainLayout>
      <Drafts/>
    </MainLayout>
    </>
  )
}

export default DraftsPage