export type socialType = "google" | "facebook" | "apple";
export type socialName = "Google" | "Facebook" | "Apple";

export interface ISocialButton {
  id: socialType;
  serviceName: socialName;
}
