import { getUsersEmailApi } from "@api/requests/protected";
import { IMessageSenderState } from "@interfaces/bll/messageSender.interface";
import { RootState } from "@redux/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IMessageSenderState = {
  users: null,
  isOpen: false,
  data: {
    to: "",
    message: "",
  },
};

export const getUsersEmail = createAsyncThunk<
  string[],
  void,
  { state: RootState }
>("get-users-email", async () => {
  const data = await getUsersEmailApi();
  return data;
});

const messageSenderSlice = createSlice({
  name: "messageSender",
  initialState,
  reducers: {
    toggleOpenMessageSender: (state) => {
      state.isOpen = !state.isOpen;
    },
    setDataMessageSender: (
      state,
      { payload }: PayloadAction<{ field: "to" | "message"; value: string }>
    ) => {
      state.data[payload.field] = payload.value;
    },
    resetDataMessageSender: (state) => {
      state.data.to = ""
      state.data.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUsersEmail.fulfilled,
      (state, { payload }: PayloadAction<string[]>) => {
        state.users = [...payload];
      }
    );
  },
});

export const { toggleOpenMessageSender, setDataMessageSender,resetDataMessageSender } =
  messageSenderSlice.actions;

export default messageSenderSlice.reducer;
