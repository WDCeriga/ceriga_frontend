import {
  ICreateNewOrder,
  IMaterial,
  IOrderState,
  orderStep,
} from "../../interfaces/bll/order.interface";
import {
  IQuantityItem,
  quantityType,
} from "@interfaces/order/quantity.interface";
import {
  colorCustomLabelType,
  materialCustomLabelType,
} from "@interfaces/order/customLabel.interface";
import {
  continueOrderApi,
  createNewDraftApi,
  loadDeliveryApi,
  uploadDesignApi,
  uploadLabelApi,
  uploadNeckApi,
  uploadPackageApi,
} from "@api/requests/protected";
import { FadingType, StitchingType } from "@interfaces/order/design.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { neckSizeType } from "@interfaces/order/selectNeck.interface";
import { RootState } from "@redux/store";
import { initialState as firstState } from "@constants/order/initialState";
import { IDelivery } from "@interfaces/Delivery.interface";
import { ITableSizeRow } from "@interfaces/order/sizes.interface";
import { ICountrySelect } from "@interfaces/order/delivery.interface";
import { printingType } from "@interfaces/order/printing.interface";

import { selectStyleType } from "../../interfaces/order/selectStyle.interface";

const initialState: IOrderState = firstState;

export const createNewDraft = createAsyncThunk<
  { id: string; moq: string },
  { draft: IOrderState },
  { state: RootState }
>("create-draft", async ({ draft }) => {
  const data = await createNewDraftApi(draft);
  return data;
});

export const continueOrder = createAsyncThunk<
  IOrderState,
  string,
  { state: RootState }
>("continue-order", async (draftId) => {
  const data: IOrderState = await continueOrderApi(draftId);
  return data;
});

export const uploadDesign = createAsyncThunk<
  string,
  { formData: FormData; draftId: string },
  { state: RootState }
>("upload-design", async ({ formData, draftId }) => {
  const data = await uploadDesignApi(formData, draftId);
  return data;
});

export const uploadLabel = createAsyncThunk<
  string,
  { formData: FormData; draftId: string },
  { state: RootState }
>("upload-label", async ({ formData, draftId }) => {
  const data = await uploadLabelApi(formData, draftId);
  return data;
});

export const uploadNeck = createAsyncThunk<
  string,
  { formData: FormData; draftId: string },
  { state: RootState }
>("upload-neck", async ({ formData, draftId }) => {
  const data = await uploadNeckApi(formData, draftId);
  return data;
});

export const uploadPackage = createAsyncThunk<
  string,
  { formData: FormData; draftId: string },
  { state: RootState }
>("upload-package", async ({ formData, draftId }) => {
  const data = await uploadPackageApi(formData, draftId);
  return data;
});

export const loadDelivery = createAsyncThunk<
  IDelivery,
  void,
  { state: RootState }
>("load-delivery", async () => {
  const data: IDelivery = await loadDeliveryApi();
  return data;
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderState: () => initialState,
    createNewOrder: (
      state: IOrderState,
      { payload }: PayloadAction<ICreateNewOrder>
    ) => {
      state.orderStep = "size";
      state.name = payload.productType;
      state.productType = payload.productType;
    },
    loadOrder: (_, { payload }: PayloadAction<IOrderState>) => {
      return payload;
    },
    changeOrderStep: (
      state: IOrderState,
      { payload }: PayloadAction<orderStep>
    ) => {
      state.orderStep = payload;
    },
    changeTableSize: (
      state: IOrderState,
      { payload }: PayloadAction<ITableSizeRow[]>
    ) => {
      state.tableSize = payload;
    },
    changeTableType: (state: IOrderState, payload: PayloadAction<string>) => {
      state.tableType = payload.payload;
    },
    updateTableSizeParam: (
      state: IOrderState,
      {
        payload,
      }: PayloadAction<{ rowName: string; param: string; newValue: number }>
    ) => {
      const { rowName, param, newValue } = payload;
      const row = state.tableSize.find((row) => row.name === rowName);
      if (row) {
        const item = row.list.find((item) => item.param === param);
        if (item) {
          item.value = newValue;
        }
      }
      state.tableType = "Custom";
    },
    updateColor: (
      state: IOrderState,
      { payload }: PayloadAction<{ colorHex: string; path: string }>
    ) => {
      state.color.hex = payload.colorHex;
      state.color.path = payload.path;
    },
    updateDeyStyle: (
      state: IOrderState,
      { payload }: PayloadAction<selectStyleType>
    ) => {
      state.dyeStyle = payload;
    },
    updateColorDescription: (
      state: IOrderState,
      { payload }: PayloadAction<string>
    ) => {
      state.color.description = payload;
    },
    updateMaterial: (
      state: IOrderState,
      { payload }: PayloadAction<IMaterial>
    ) => {
      state.material = payload;
    },
    updatePrinting: (state, { payload }: PayloadAction<printingType>) => {
      state.printing = payload;
    },
    changeStitchingType: (
      state: IOrderState,
      { payload }: PayloadAction<StitchingType>
    ) => {
      state.stitching.type = payload;
    },
    updateCommentStitching: (
      state: IOrderState,
      { payload }: PayloadAction<string>
    ) => {
      state.stitching.description = payload;
    },
    changeFadingType: (
      state: IOrderState,
      { payload }: PayloadAction<FadingType>
    ) => {
      state.fading.type = payload;
    },
    changeNeckType: (
      state: IOrderState,
      { payload }: PayloadAction<neckSizeType>
    ) => {
      state.neck.noLabels = false;
      state.neck.type = payload;
    },
    updateNeckDescription: (
      state: IOrderState,
      { payload }: PayloadAction<string>
    ) => {
      state.neckDescription = payload;
    },
    setNoLabel: (state: IOrderState) => {
      state.neck.noLabels = true;
      state.neck.type = null;
    },
    setNameOrder: (state: IOrderState, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    changePackageStatus: (
      state: IOrderState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.package.isPackage = payload;
    },
    changePackageDescription: (
      state: IOrderState,
      { payload }: PayloadAction<string>
    ) => {
      state.package.description = payload;
    },
    changeQuantityType: (
      state: IOrderState,
      { payload }: PayloadAction<quantityType>
    ) => {
      if (payload === "Sample Selection") {
        state.quantity.list = state.quantity.list.map((quantityItem) => ({
          ...quantityItem,
          value: 5,
        }));
      }

      state.quantity.type = payload;
    },
    changeQuantityItem: (
      state: IOrderState,
      { payload }: PayloadAction<IQuantityItem>
    ) => {
      state.quantity.list = state.quantity.list.map((item) => {
        if (item.name === payload.name) {
          item.value = payload.value;
        }
        return item;
      });
      if (payload.value > 5) {
        state.quantity.type = "Bulk";
      } else {
        const allValuesAreLessOrEqual5 = state.quantity.list.every(
          (item) => item.value <= 5
        );

        if (allValuesAreLessOrEqual5) {
          state.quantity.type = "Sample Selection";
        }
      }
    },
    changeColorInNeck: (
      state: IOrderState,
      { payload }: PayloadAction<colorCustomLabelType>
    ) => {
      state.neck.additional.color = payload;
    },
    changeMaterialInNeck: (
      state: IOrderState,
      { payload }: PayloadAction<materialCustomLabelType>
    ) => {
      state.neck.additional.material = payload;
    },
    changeDeliveryForm: (
      state: IOrderState,
      {
        payload,
      }: PayloadAction<{
        type: keyof IDelivery;
        value: string | boolean | number;
      }>
    ) => {
      const { type, value } = payload;
      state.delivery = {
        ...state.delivery,
        [type]: value,
      };
    },
    changeCountryForm: (
      state: IOrderState,
      { payload }: PayloadAction<ICountrySelect>
    ) => {
      state.delivery.country = payload;
    },
    setSubtotal: (state: IOrderState, { payload }: PayloadAction<number>) => {
      state.subtotal = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewDraft.fulfilled, (state, { payload }) => {
      state.draftId = payload.id;
      state.color = {
        hex: null,
        path: null,
        description: "",
      };
      state.moq = Number(payload.moq);
    });
    builder.addCase(
      continueOrder.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<IOrderState>) => {
        Object.assign(state, payload);
      }
    );
    builder.addCase(
      uploadDesign.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<string>) => {
        state.designUploads.push(payload);
      }
    );
    builder.addCase(
      uploadLabel.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<string>) => {
        state.labelUploads.push(payload);
      }
    );
    builder.addCase(
      uploadNeck.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<string>) => {
        state.neckUploads.push(payload);
      }
    );
    builder.addCase(
      uploadPackage.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<string>) => {
        state.packageUploads.push(payload);
      }
    );
    builder.addCase(
      loadDelivery.fulfilled,
      (state: IOrderState, { payload }: PayloadAction<IDelivery>) => {
        if (payload) {
          state.delivery = payload;
        } else {
          state.delivery = {
            sameAsBilling: false,
            companyName: "",
            addressLine: "",
            zipCode: "",
            taxNumber: "",
            bolNumber: "",
            city: "",
            state: "",
            country: null,
            name: "",
            phoneNumber: "",
            email: "",
          };
        }
      }
    );
  },
});

export const {
  createNewOrder,
  changeOrderStep,
  changeTableSize,
  updateTableSizeParam,
  changeTableType,
  updateColor,
  updateDeyStyle,
  updateColorDescription,
  updateMaterial,
  updatePrinting,
  changeStitchingType,
  updateCommentStitching,
  changeFadingType,
  changeNeckType,
  updateNeckDescription,
  setNoLabel,
  setNameOrder,
  changePackageStatus,
  changePackageDescription,
  changeQuantityType,
  changeQuantityItem,
  changeColorInNeck,
  changeMaterialInNeck,
  changeDeliveryForm,
  changeCountryForm,
  resetOrderState,
  loadOrder,
  setSubtotal,
} = orderSlice.actions;

export default orderSlice.reducer;
