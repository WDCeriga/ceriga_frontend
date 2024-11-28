import { FC } from "react";

// import ChoosePrinting from "@components/Order/Color/ChoosePrinting/ChoosePrinting";
// import ChooseColor from "@components/Order/Color/ChooseColor/ChooseColor";
// import AdminMenu from "@components/Header/UserInfo/AdminMenu/AdminMenu";
// import FinalStitchUpload from "@components/Order/Design/Preview/FinalStitchUpload/FinalStitchUpload";
// import EditShipping from "@components/EditShipping/EditShipping";
// import DeliveryForm from "@components/Order/Delivery/Form/Form";
// import ChooseColor from "@components/Order/Color/ChooseColor/ChooseColor";
// import HoodiesSize from "@components/Order/Size/ImageFrame/Hoodie/Hoodie";
// import { usersAnalyticsData } from "@constants/analytics";
// import Analytics from "@components/Analytics/Analytics";
// import EmptyList from "@components/Drafts/List/EmptyList/EmptyList";
// import ConfigurationLabel from "@components/Order/Design/SelectNeck/CustomizeLabels/Configuration/Configuration";
// import CustomiseLabel from "@components/Order/Design/SelectNeck/CustomizeLabels/Configuration/Customise";
// import ChooseChange from "@components/Common/ButtonSelect/ButtonSelect";
// import ColorPicker from "@components/Common/ColorPicker/ColorPicker";
// import DeliveryForm from "@components/Delivery/Form";
// import CustomizeLabels from "@components/Order/CustomizeLabels/CustomizeLabels";
// import ChooseColor from "@components/Order/ChooseColor/ChooseColor";
// import ChooseMaterial from "@components/Order/ChooseMaterial/ChooseMaterial";
// import SelectNeck from "@components/Order/Design/SelectNeck/SelectNeck";
// import Pagination  from '@common/Pagination/Pagination';
// import Title from "@common/Title/Title";
// import PackageDetailsForm from "@components/Order/Package/Form/Form";
// import QuantityOrder from "@components/Order/Package/Quantity/Quantity";
// import SizesOrder from "@components/Order/Size/Sizes/Sizes";
// import OrderPreview from "@components/Order/Preview/Preview";
// import ProductWithColor from "@components/Order/ProductWithColor/ProductWithColor";
// import SweatPantsSize from "@components/Order/Size/ImageFrame/SweatPants/SweatPants";
// import InvoiceContent from "@components/Invoice/Content/Content";
// import SendMessage from "@components/SendMessage/SendMessage";
// import SelectNeck from "@components/Order/Design/SelectNeck/SelectNeck";
// import SelectRegion from "@common/Form/Select/SelectState";
// import SelectLCountry from "@common/Form/Select/SelectCountry";
import MainLayout from "@common/Layouts/Main/Layout";

const TestComponents: FC = () => {
  return (
    <MainLayout>
      <section
        style={{
          paddingBottom: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "30px",
          background: " #F3F4F3",
        }}
      >
        <h1 style={{ marginTop: "80px", textAlign: "center" }}>
          Test components page
        </h1>
        {/* <ColorPicker /> */}
        {/* <EmptyList marginT="32px" /> */}
        {/* <ChooseChange onEvent={() => {}} text="Choose a color" />
        <ChooseChange onEvent={() => {}} text="Choose a fabric" /> */}
        {/* <ChooseColor closeEvent={() => {}} />
        <ChooseMaterial closeEvent={() => {}} /> */}
        {/* <ChooseChange onEvent={() => {}} text="Stitching And Upload Design" /> */}
        {/* <CustomizeLabels /> */}
        {/* <SelectNeck /> */}
        {/* <Pagination count={10} /> */}
        {/* <Title text="Delivery" /> */}
        {/* <DeliveryForm /> */}
        {/* <OrderPreview /> */}
        {/* <SizesOrder/> */}
        {/* <SendMessage /> */}
        {/* <Analytics title="Users" items={usersAnalyticsData} /> */}
        {/* <PackageDetailsForm/> */}
        {/* <QuantityOrder/> */}
        {/* <ConfigurationLabel/> */}
        {/* <DeliveryForm /> */}
        {/* <ProductWithColor color="red" product="Zip Up Hoodie" />
        <ProductWithColor color="teal" product="T-shirt" />
        <ProductWithColor color="blue" product="Hoodie" />
        <ProductWithColor color="#ffc800" product="Crewneck" />
        <ProductWithColor color="#d400ff" product="Tank Top" />
        <ProductWithColor color="#0095ff" product="Sweat Pants" />
        <ProductWithColor color="#7b00ff" product="Uncuffed" /> */}
        {/* <HoodiesSize/>
        <SweatPantsSize/> */}
        {/* <ChooseColor/> */}
        {/* <InvoiceContent/> */}
        {/* <EditShipping /> */}
        {/* <FinalStitchUpload/> */}
        {/* <SelectLCountry initialValue={null}/> */}
        {/* <SelectRegion/> */}
        {/* <ChoosePrinting /> */}
      </section>
    </MainLayout>
  );
};

export default TestComponents;
