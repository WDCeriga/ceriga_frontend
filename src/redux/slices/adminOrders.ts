import {
  IAdminOrder,
  IAdminOrdersState,
  manufacturerType,
  sortType,
} from "@interfaces/bll/adminOrders.interface";
import {
  changeManufactoryApi,
  deleteOrderAdminApi,
  getAllOrdersApi,
  getInvoiceDataApi,
  getOrderListInAdminApi,
  getTotalCountInOrderApi,
} from "@api/requests/protected";
import { Loading } from "notiflix";

import { RootState } from "@redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInvoice } from "@interfaces/Invoice.interface";

const initialState: IAdminOrdersState = {
  search: "",
  isSearch: false,
  list: null,
  invoiceOrder: null,
  totalCount: null,
  sortType: "Newest First",
};

export const getAllOrders = createAsyncThunk<
  IAdminOrder[],
  void,
  { state: RootState }
>("get-all-orders", async () => {
  const data = await getAllOrdersApi();
  return data;
});

export const getOrderListInAdmin = createAsyncThunk<
  IAdminOrder[],
  string,
  { state: RootState }
>("get-order-list-in-admin", async (manufacturer) => {
  const data = getOrderListInAdminApi(manufacturer);
  return data;
});

export const changeManufactory = createAsyncThunk<
  manufacturerType,
  { orderId: string; newManufacturer: manufacturerType },
  { state: RootState }
>("change-manufacture", async ({ orderId, newManufacturer }) => {
  const data = await changeManufactoryApi(orderId, newManufacturer);
  return data;
});

export const deleteOrderByAdmin = createAsyncThunk<
  string,
  string,
  { state: RootState }
>("delete-order-by-admin", async (orderId) => {
  const data = await deleteOrderAdminApi(orderId);
  return data;
});

export const getInvoiceOrder = createAsyncThunk<
  IInvoice,
  string,
  { state: RootState }
>("get-invoice-order", async (orderId) => {
  const data = await getInvoiceDataApi(orderId);
  return data;
});

export const getTotalCountInOrder = createAsyncThunk<
  number,
  string,
  { state: RootState }
>("get-total-count-in-order", async (orderId) => {
  const data = getTotalCountInOrderApi(orderId);
  return data;
});

const adminOrders = createSlice({
  name: "admin-orders",
  initialState,
  reducers: {
    changeSearchAdminOrder: (state, { payload }: PayloadAction<string>) => {
      if (payload.length === 0) {
        state.isSearch = false;
      } else {
        state.isSearch = true;
      }
      state.search = payload;
    },
    changeInvoiceValue: (
      state: IAdminOrdersState,
      { payload }: PayloadAction<{ name: keyof IInvoice; value: string }>
    ) => {
      if (state.invoiceOrder !== null) {
        state.invoiceOrder[payload.name] = payload.value;
      }
    },
    resetAdminOrderList: (state: IAdminOrdersState) => {
      state.list = null;
      state.invoiceOrder = null;
      state.totalCount = null;
    },
    setSortAdminOrders: (
      state: IAdminOrdersState,
      { payload }: PayloadAction<sortType>
    ) => {
      state.sortType = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrders.fulfilled, (state, { payload }) => {
      state.list = payload;
      Loading.remove();
    });
    builder.addCase(getAllOrders.pending, () => {
      Loading.standard();
    });
    builder.addCase(getAllOrders.rejected, () => {
      Loading.remove();
    });
    builder.addCase(getOrderListInAdmin.fulfilled, (state, { payload }) => {
      state.list = payload;
      Loading.remove();
    });
    builder.addCase(getOrderListInAdmin.pending, () => {
      Loading.standard("Loading..");
    });
    builder.addCase(getOrderListInAdmin.rejected, () => {
      Loading.remove();
    });
    builder.addCase(
      deleteOrderByAdmin.fulfilled,
      (state: IAdminOrdersState, { payload }: PayloadAction<string>) => {
        if (state.list !== null) {
          state.list = state.list?.filter((item) => item.id !== payload);
        }
      }
    );
    builder.addCase(
      getInvoiceOrder.fulfilled,
      (state: IAdminOrdersState, { payload }: PayloadAction<IInvoice>) => {
        state.invoiceOrder = payload;
      }
    );
    builder.addCase(
      getTotalCountInOrder.fulfilled,
      (state: IAdminOrdersState, { payload }: PayloadAction<number>) => {
        state.totalCount = payload;
      }
    );
  },
});

export const {
  changeSearchAdminOrder,
  changeInvoiceValue,
  resetAdminOrderList,
  setSortAdminOrders,
} = adminOrders.actions;

export default adminOrders.reducer;
