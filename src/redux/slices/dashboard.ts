import {
  IDashboard,
  IUserDashboard,
  usersRoleWithAllType,
} from "@interfaces/bll/dashboard.interface";
import {
  changeManufacturerInAdminApi,
  getUsersListApi,
} from "@api/requests/protected";
import { RootState } from "@redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import routes from "@routes/index";

const initialState: IDashboard = {
  users: [],
  search: "",
  filterByRole: "All Users",
};

export const getUsersList = createAsyncThunk<
  IUserDashboard[],
  void,
  { state: RootState }
>("get-users-list", async () => {
  const data = await getUsersListApi();
  return data;
});

export const changeManufacturerInAdmin = createAsyncThunk<
  { id: string; manufacturer: string },
  { id: string; manufacturer: string },
  { state: RootState }
>("change-manufacturer-in-admin", async ({ id, manufacturer }) => {
  const data = await changeManufacturerInAdminApi(id, manufacturer);
  return data;
});

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    changeUsersSearchValue: (
      state: IDashboard,
      { payload }: PayloadAction<string>
    ) => {
      state.search = payload;
    },
    changeFilterUsersByRole: (
      state: IDashboard,
      { payload }: PayloadAction<usersRoleWithAllType>
    ) => {
      state.filterByRole = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsersList.fulfilled,
      (state, { payload }: PayloadAction<IUserDashboard[]>) => {
        state.users = payload.map((user) => {
          if (user.photo && !user.photo.startsWith("http")) {
            user.photo = `${routes.server.base}/public/uploads/profile/${user.photo}`;
          }
          return user;
        });
      }
    );
    builder.addCase(
      changeManufacturerInAdmin.fulfilled,
      (
        state,
        { payload }: PayloadAction<{ id: string; manufacturer: string }>
      ) => {
        state.users = state.users.map((user) => {
          if (user._id === payload.id) {
            user.manufacturer = payload.manufacturer;
          }
          return user;
        });
      }
    );
  },
});

export const { changeUsersSearchValue, changeFilterUsersByRole } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
