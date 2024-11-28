import { IColorState } from "@interfaces/bll/colors.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

import { getColorsForProductApi } from "../../api/requests/default";

const initialState: IColorState = {
  product: null,
  list: [],
};

export const getColorsForProduct = createAsyncThunk<
  IColorState,
  string,
  { state: RootState }
>("get-colors-for-product", async (product) => {
  const data = await getColorsForProductApi(product);
  return data;
});

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    resetColors: (state: IColorState) => {
      state.product = null;
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getColorsForProduct.fulfilled,
      (state, { payload }: PayloadAction<IColorState>) => {
        state.product = payload.product;
        state.list = payload.list;
      }
    );
  },
});

export const { resetColors } = colorsSlice.actions;
export default colorsSlice.reducer;
