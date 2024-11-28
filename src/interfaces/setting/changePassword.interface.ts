export interface IChangePassportData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IChangePassportResponse {
  status: string;
  message: string;
}
