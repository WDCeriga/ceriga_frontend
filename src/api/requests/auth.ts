import {
  IChangePasswordApi,
  IForgotPassword,
  ISignInFormValues,
  ISignUpFormValues,
  ISocialAuth,
} from "../../interfaces/Auth.interfaces";
import { authApi } from "../api";

const signInApi = async (candidate: ISignInFormValues) => {
  try {
    const { data } = await authApi.post("/sign-in", candidate);
    return data;
  } catch (error) {
    console.error("Sign-in failed:", error);
    throw error;
  }
};

const signUpApi = async (candidate: ISignUpFormValues) => {
  try {
    const { data } = await authApi.post("/sign-up", candidate);
    return data;
  } catch (error) {
    console.error("Sign-up failed:", error);
    throw error;
  }
};

const forgotPassApi = async (candidate: IForgotPassword) => {
  try {
    const { data } = await authApi.post("/forgot-pass", candidate);
    return data;
  } catch (error) {
    console.error("Forgot password failed:", error);
    throw error;
  }
};

const checkForgetPassApi = async (candidate: {
  code: string;
  userId: string;
  password: string;
}) => {
  try {
    const { data } = await authApi.post("/check-link", candidate);
    return data;
  } catch (error) {
    console.error("Check forgot password link failed:", error);
    throw error;
  }
};

const changePasswordApi = async (candidate: IChangePasswordApi) => {
  try {
    const { data } = await authApi.post("/change-password", candidate);
    return data;
  } catch (error) {
    console.error("Change password failed:", error);
    throw error;
  }
};

const getSocialAuthApi = async (candidate: ISocialAuth) => {
  try {
    const { data } = await authApi.get(`/get-tokens?id=${candidate.id}`);
    return data;
  } catch (error) {
    console.error("Get social auth tokens failed:", error);
    throw error;
  }
};

export {
  signInApi,
  signUpApi,
  forgotPassApi,
  checkForgetPassApi,
  changePasswordApi,
  getSocialAuthApi,
};
