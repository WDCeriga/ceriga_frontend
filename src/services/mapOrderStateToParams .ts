import { IOrderState } from "@interfaces/bll/order.interface";
import { IParamPreviewOrder } from "@interfaces/order/paramsPreview.interface";

export const mapOrderStateToParams = (state: IOrderState) => {
  const currentId = state.draftId ?? state._id;
  //const currentId = state._id;
  console.log(currentId);

  const data: IParamPreviewOrder[] = [
    {
      title: "Fabrics",
      paramsType: "list",
      subparameters: [
        { title: "Materials", value: state.material.name || "" },
        { title: "GSM", value: state.material.value || "" },
      ],
    },
    {
      title: "Colour",
      paramsType: "list",
      subparameters: [
        { title: "Hex Code", value: state.color.hex || "" },
        { title: "Color Description", value: state.color.description || "" },
        { title: "Dye style", value: state.dyeStyle || "" },
        { title: "Extra details", value: state.stitching.description || "" },
      ],
    },
    {
      title: "Neck label",
      paramsType: "list",
      subparameters: [
        {
          title: "Design",
          isLink: true,
          link: `https://storage.googleapis.com/ceriga-storage-bucket/${currentId}/neckUploads/`,
        },
        {
          title: "Design Options",
          value: state.neck.additional.material || "",
        },
        { title: "Neck Label Description", value: state.neckDescription || "" },
        { title: "Material", value: state.neck.additional.material || "" },
        { title: "Colour", value: state.neck.additional.color || "" },
      ],
    },
    {
      title: "Care label",
      paramsType: "list",
      subparameters: [
        {
          title: "",
          isLink: true,
          titleStyle: "bold",
          link: `https://storage.googleapis.com/ceriga-storage-bucket/${currentId}/labelUploads/`,
        },
      ],
    },
    {
      title: "Design",
      paramsType: "list",
      subparameters: [
        {
          title: "Design",
          isLink: true,
          titleStyle: "bold",
          link: `https://storage.googleapis.com/ceriga-storage-bucket/${currentId}/designUploads/`,
        },
        { title: "Extra Details", value: state.stitching.description || "" },
        { title: "Stitching", value: state.stitching.type || "" },
        { title: "Custom Stitching", value: "" },
        { title: "Fading", value: state.fading.type || "" },
        { title: "Custom Fading", value: "" },
      ],
    },
    {
      title: "Packaging",
      paramsType: "list",
      subparameters: [

        {
          title: "Packaging Type",
          value: state.package.isPackage ? "Packaged" : "Unpackage",
        },
        { title: "Extra Details", value: state.package.description || "" },
        {
          title: "Images",
          isLink: true,
          titleStyle: "bold",
          link: `https://storage.googleapis.com/ceriga-storage-bucket/${currentId}/packageUploads/`,
        },
      ],
    },
    {
      title: "Quantity",
      paramsType: "table",
      subparameters: state.quantity.list.map((item) => ({
        title: item.name,
        value: item.value.toString(),
      })),
    },
  ];
  return data;
};
