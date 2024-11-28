export type formType =
  | "signIn"
  | "signUp"
  | "forgotPassword"
  | "newPass"
  | "resetCode"
  | "resetEmail";

export interface IAuth {
  currentType?: formType;
}

export interface IFormComponent {
  handleChangeForm: (type: formType) => void;
}

export interface ISignUpFormValues {
  name: string;
  phone: string;
  email: string;
  password: string;
  privacyConfirm: boolean;
}

export interface IForgotPassword {
  email: string;
}

export interface ICheckForgotPass {
  code: string;
}

export interface IChangePassword {
  password: string;
  rePassword: string;
}

export interface IChangePasswordApi {
  password: string;
  token: string;
}

export interface IInput {
  label?: string;
  type?: "email" | "password" | "tel";
  marginT?: string;
  placeholder?: string;
  register: object;
}

export interface IInputDescription extends IInput {
  description: string;
}

export interface ISignInFormValues {
  email: string;
  password: string;
}

export interface IForgotPassword {
  email: string;
}

export interface ISocialAuth {
  id: string;
}

export interface IResetPassword {
  code: string;
  password: string;
  rePassword: string;
}
