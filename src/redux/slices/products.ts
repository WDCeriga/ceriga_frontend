import {
  IProduct,
  IProductFull,
  IProductsState,
} from "@interfaces/bll/products.interface";
import { Loading } from "notiflix";

import { getListProductsApi, getProductInfoApi } from "@api/requests/default";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const initialState: IProductsState = {
  list: [],
  productOpen: null,
};

export const getProductsList = createAsyncThunk<
  IProduct[],
  void,
  { state: RootState }
>("get-products", async () => {
  const data = await getListProductsApi();
  return data;
});

export const getProductInfo = createAsyncThunk<
  IProductFull,
  string,
  { state: RootState }
>("get-product", async (id: string) => {
  const data = await getProductInfoApi(id);
  return data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearOpenProduct: (state: IProductsState) => {
      state.productOpen = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getProductsList.fulfilled,
      (state, { payload }: PayloadAction<IProduct[]>) => {
        state.list = payload;
      }
    );

    builder.addCase(getProductsList.rejected, () => {
      console.error("Error to get products list");
    });
    builder.addCase(
      getProductInfo.fulfilled,
      (state, { payload }: PayloadAction<IProductFull>) => {
        state.productOpen = payload;
        Loading.remove();
      }
    );
    builder.addCase(getProductInfo.pending, () => {
      Loading.standard("Loading..");
    });
  },
});

export const { clearOpenProduct } = productsSlice.actions;
export default productsSlice.reducer;
