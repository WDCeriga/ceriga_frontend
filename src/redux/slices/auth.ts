import {
  ISignInFormValues,
  ISignUpFormValues,
  ISocialAuth,
} from "../../interfaces/Auth.interfaces";
import {
  getSocialAuthApi,
  signInApi,
  signUpApi,
} from "../../api/requests/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { localGetItem, localSetItem } from "../../services/localStorage";
import notification from "../../services/notification";
import { RootState } from "../store";

export type tokenType = string | null | undefined;

export interface IAuthState {
  isLoading: boolean;
  token: tokenType;
  refresh: tokenType;
}

const initialState: IAuthState = {
  isLoading: false,
  token: localGetItem("token"),
  refresh: localGetItem("refresh"),
};

export const signIn = createAsyncThunk<
  { token?: string; refresh?: string; message?: string },
  ISignInFormValues,
  { state: RootState }
>("sign-in", async (candidate: ISignInFormValues) => {
  const data = await signInApi(candidate);
  return data;
});

export const signUp = createAsyncThunk<
  { token?: string; refresh?: string; message?: string },
  ISignUpFormValues,
  { state: RootState }
>("sign-up", async (candidate: ISignUpFormValues) => {
  const data = await signUpApi(candidate);
  return data;
});

export const getSocialAuth = createAsyncThunk<
  { token?: string; refreshToken?: string; message?: string },
  ISocialAuth,
  { state: RootState }
>("get-social-auth", async (candidate: ISocialAuth) => {
  const data = await getSocialAuthApi(candidate);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      const { token, refresh } = payload || {};
      state.isLoading = false;
      state.token = token;
      state.refresh = refresh;
      if (token) localSetItem<string>("token", token);
      if (refresh) localSetItem<string>("refresh", refresh);
    });
    builder.addCase(signIn.rejected, (state) => {
      notification.error("Invalid auth");
      state.isLoading = false;
    });

    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      const { token, refresh } = payload || {};
      state.isLoading = false;
      state.token = token;
      state.refresh = refresh;
      if (token) localSetItem<string>("token", token);
      if (refresh) localSetItem<string>("refresh", refresh);
    });
    builder.addCase(signUp.rejected, (state) => {
      notification.error("Error");
      state.isLoading = false;
    });

    builder.addCase(getSocialAuth.fulfilled, (state, { payload }) => {
      const { token, refreshToken } = payload || {};
    
      state.token = token;
      state.refresh = refreshToken;
      if (token) localSetItem<string>("token", token);
      if (refreshToken) localSetItem<string>("refresh", refreshToken);
    });
    builder.addCase(getSocialAuth.rejected, (state) => {
      state.token = null; 
    });
  },
});

export default authSlice.reducer;