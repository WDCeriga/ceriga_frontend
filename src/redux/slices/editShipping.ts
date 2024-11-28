import {
  editShippingField,
  IEditShippingState,
} from "@interfaces/bll/editShipping.interface";
import { getShippingInOrderApi } from "@api/requests/protected";
import { RootState } from "@redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IEditShippingState = {
  isUploaded: false,
  tracking: null,
  trackingUrl: null,
  carriers: null,
  sendNotification: false,
};

export const getShippingInOrder = createAsyncThunk<
  {
    tracking: string;
    trackingUrl: string;
    carriers: string;
  },
  string,
  { state: RootState }
>("get-shipping-in-order", async (orderId) => {
  const data = await getShippingInOrderApi(orderId);
  return data;
});

const editShippingSlice = createSlice({
  name: "editShipping",
  initialState,
  reducers: {
    changeParamShipping: (
      state: IEditShippingState,
      {
        payload,
      }: PayloadAction<{
        field: editShippingField;
        value: string;
      }>
    ) => {
      state[payload.field] = payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShippingInOrder.fulfilled, (state, { payload }) => {
      state.isUploaded = true;
      state.tracking = payload.tracking;
      state.trackingUrl = payload.trackingUrl;
      state.carriers = payload.carriers;
    });
  },
});

export const { changeParamShipping } = editShippingSlice.actions;

export default editShippingSlice.reducer;
