import { StitchingType } from "./design.interface";

export type uploadTypes = "standard" | "rawEdge" | "flatlock" | "insideOut";

export interface IUploadType {
  id: uploadTypes;
  name: StitchingType;
}
