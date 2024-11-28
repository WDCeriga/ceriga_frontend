import {
  deleteNotificationApi,
  getInfoApi,
  getNotificationApi,
  uploadProfileApi,
} from "../../api/requests/protected";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INotificationCard } from "@interfaces/Notification.interface";
import { localSetItem } from "@services/localStorage";

import { IUserState, roleType } from "../../interfaces/bll/user.interface";
import routes from "../../routes";
import { RootState } from "../store";

const initialState: IUserState = {
  name: null,
  last_name: null,
  email: null,
  photo: null,
  phone: null,
  address: null,
  company: null,
  role: null,
  notification: {
    count: 0,
    list: [],
  },
  manufacturer: null,
};

export const getInfo = createAsyncThunk<
  {
    name: string;
    last_name?: string;
    email: string;
    photo?: string;
    phone?: string;
    company?: string;
    address?: string;
    role: roleType;
    manufacturer?: string;
  },
  void,
  { state: RootState }
>("get-info", async () => {
  const data = await getInfoApi();
  return data;
});

export const getNotification = createAsyncThunk<
  INotificationCard[],
  void,
  { state: RootState }
>("get-notification", async () => {
  const data = await getNotificationApi();
  return data;
});

export const deleteNotification = createAsyncThunk<
  string,
  string,
  { state: RootState }
>("delete-notification", async (candidateId: string) => {
  const id = await deleteNotificationApi(candidateId);
  return id;
});

export const uploadUserProfile = createAsyncThunk<
  string,
  FormData,
  { state: RootState }
>("upload-user-profile", async (formData) => {
  const data = await uploadProfileApi(formData);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, { payload }) => {
      const photo = payload.photo;
      state.name = payload.name || "";
      state.last_name = payload.last_name || "";
      state.email = payload.email || "";
      state.photo =
        photo && photo !== null && photo.startsWith("http")
          ? photo
          : `${routes.server.base}/public/uploads/profile/${photo}`;
      state.phone = payload.phone || "";
      state.company = payload.company || "";
      state.address = payload.address || "";
      state.role = payload.role;
      state.manufacturer = payload.manufacturer || null;
      localSetItem<string>("role", payload.role);
    });
    builder.addCase(getInfo.rejected, (state) => {
      state.name = null;
      state.last_name = null;
      state.email = null;
      state.photo = null;
      state.phone = null;
      localStorage.clear();
    });

    builder.addCase(
      getNotification.fulfilled,
      (state, { payload }: PayloadAction<INotificationCard[]>) => {
        state.notification.list = [...payload];
        state.notification.count = payload.length;
      }
    );
    builder.addCase(
      deleteNotification.fulfilled,
      (state, { payload }: { payload: string }) => {
        state.notification.list = state.notification.list.filter(
          (item) => item.id !== payload
        );
      }
    );
    builder.addCase(
      uploadUserProfile.fulfilled,
      (state, { payload }: PayloadAction<string>) => {
        state.photo = payload.startsWith("http")
          ? payload
          : `${routes.server.base}/public/uploads/profile/${payload}`;
      }
    );
  },
});

export default userSlice.reducer;
