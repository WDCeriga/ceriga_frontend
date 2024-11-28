export interface IMessageSenderState {
  users: string[] | null;
  isOpen: boolean;
  data: {
    to: string;
    message: string;
  };
}
