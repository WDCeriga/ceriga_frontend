import { IUploadType } from "@interfaces/order/uploadTypes.interface";

export const uploadsTypeStore: IUploadType[] = [
  {
    id: "standard",
    name: "Standard",
  },
  {
    id: "rawEdge",
    name: "Raw edge",
  },
  {
    id: "flatlock",
    name: "Flatlock",
  },
  {
    id: "insideOut",
    name: "Inside-out",
  },
];
