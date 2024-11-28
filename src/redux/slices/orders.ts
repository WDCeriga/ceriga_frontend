import {
  changeOrderStatusApi,
  deleteOrderApi,
  duplicateOrderApi,
  editOrderApi,
  getOrdersListApi,
} from "@api/requests/protected";
import {
  IOrderItem,
  orderStatusType,
} from "@interfaces/orders/orders.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import { IOrderState } from "@interfaces/bll/order.interface";
import { sortType } from "@interfaces/bll/adminOrders.interface";

import { IOrdersState } from "../../interfaces/bll/orders.interface";
import { filterType } from "../../interfaces/orders/filter.interface";

const initialState: IOrdersState = {
  search: "",
  isFilter: false,
  activeFilter: "all",
  selectedOrders: [],
  ordersList: [],
  sortType: "Oldest First",
};

export const getOrdersList = createAsyncThunk<
  IOrderItem[],
  void,
  { state: RootState }
>("orders-list", async () => {
  const data = await getOrdersListApi();
  return data;
});

export const duplicateOrder = createAsyncThunk<
  IOrderItem,
  number,
  { state: RootState }
>("order-item-duplicate", async (orderId: number) => {
  const data = await duplicateOrderApi(orderId);
  return data;
});

export const deleteOrder = createAsyncThunk<
  string,
  number,
  { state: RootState }
>("delete-order", async (orderId: number) => {
  const data = await deleteOrderApi(orderId);
  return data;
});

export const editOrder = createAsyncThunk<
  IOrderState,
  number,
  { state: RootState }
>("edit-order", async (orderId: number) => {
  const data = await editOrderApi(orderId);
  return data;
});

export const changeOrderStatus = createAsyncThunk<
  { orderId: number; orderStatus: orderStatusType },
  { orderId: number; orderStatus: orderStatusType },
  { state: RootState }
>("change-order-status", async ({ orderId, orderStatus }) => {
  const data = await changeOrderStatusApi(orderId, orderStatus);
  return data;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    changeSearchValue: (state, { payload }: PayloadAction<string>) => {
      if (payload.length === 0) {
        state.isFilter = false;
      } else {
        state.isFilter = true;
      }
      state.search = payload;
    },
    setIsFilterActive: (state) => {
      state.isFilter = true;
    },
    changeActiveFilter: (state, { payload }: PayloadAction<filterType>) => {
      state.activeFilter = payload;
    },

    selectOneOrderActive: (state, { payload }: PayloadAction<number>) => {
      if (state.selectedOrders.includes(payload)) {
        const index = state.selectedOrders.indexOf(payload);
        if (index > -1) {
          state.selectedOrders.splice(index, 1);
        }
      } else {
        state.selectedOrders = [...state.selectedOrders, payload];
      }
    },
    toggleOrdersActive: (state) => {
      if (state.selectedOrders.length !== state.ordersList.length) {
        state.selectedOrders = [...state.ordersList.map((item) => item.id)];
      } else {
        state.selectedOrders = [];
      }
    },
    switchSortOrders: (
      state: IOrdersState,
      { payload }: PayloadAction<sortType>
    ) => {
      state.sortType = payload;
    },
    changeNameInOrder: (
      state: IOrdersState,
      { payload }: PayloadAction<{ orderId: number; newName: string }>
    ) => {
      state.ordersList = state.ordersList.map((item) => {
        if (item.id === payload.orderId) {
          return { ...item, name: payload.newName };
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getOrdersList.fulfilled,
      (state: IOrdersState, { payload }: PayloadAction<IOrderItem[]>) => {
        state.ordersList = payload;
      }
    );
    builder.addCase(
      duplicateOrder.fulfilled,
      (state: IOrdersState, { payload }: PayloadAction<IOrderItem>) => {
        state.ordersList.push(payload);
      }
    );
    builder.addCase(
      deleteOrder.fulfilled,
      (state: IOrdersState, { payload }: PayloadAction<string>) => {
        state.ordersList = state.ordersList.filter(
          (item) => `${item.id}` !== payload
        );
      }
    );
    builder.addCase(
      changeOrderStatus.fulfilled,
      (
        state: IOrdersState,
        {
          payload,
        }: PayloadAction<{ orderId: number; orderStatus: orderStatusType }>
      ) => {
        state.ordersList = state.ordersList.map((item) => {
          if (item.id === payload.orderId) {
            return {
              ...item,
              orderStatus: payload.orderStatus,
            };
          }
          return item;
        });
      }
    );
  },
});

export const {
  changeSearchValue,
  changeActiveFilter,
  selectOneOrderActive,
  toggleOrdersActive,
  setIsFilterActive,
  switchSortOrders,
  changeNameInOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;
