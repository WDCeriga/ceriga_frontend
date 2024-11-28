interface FabricOption {
  type: string;
  cost: number;
  availableColors?: string[];
}

interface DyeStyle {
  type: string;
  cost: number;
}

interface LabelOption {
  type: string;
  cost?: number;
}

interface LabelMaterial {
  type: string;
  cost: number;
}

interface StitchingOption {
  type: string;
  cost: number;
}

interface FadingOption {
  type: string;
  cost: number;
}

export interface IProduct {
  _id: string;
  name: string;
  images: string[];
  categories: string[];
  fits: string[]
}

export interface IProductFull {
  name: string;
  description?: string;
  categories: string[];
  moq: number;
  startingPrice: number;
  fabric: FabricOption[];
  colorOptions?: number;
  additionalColorCost?: number;
  dyeStyles: DyeStyle[];
  fits?: string[];
  origin?: string;
  leadTime: string;
  labelOptions?: LabelOption[];
  labelMaterials: LabelMaterial[];
  stitchingOptions: StitchingOption[];
  fadingOptions: FadingOption[];
  images?: string[];
  createdAt?: Date;
}

export interface IProductsState {
  productOpen: IProductFull | null;
  list: IProduct[] | [];
}
