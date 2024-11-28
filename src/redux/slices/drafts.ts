import {
  DraftItem,
  FormattedDraftItem,
  IDraftCard,
} from "@interfaces/Draft.interface";
import {
  deleteDraftApi,
  duplicateDraftApi,
  getDraftsListApi,
} from "@api/requests/protected";
import { IDraftState } from "@interfaces/bll/drafts.interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

const initialState: IDraftState = {
  list: [],
};

export const getDraftsList = createAsyncThunk<
  FormattedDraftItem[],
  void,
  { state: RootState }
>("get-drafts-list", async () => {
  const data = await getDraftsListApi();
  const dataFormatting = data.map((item: DraftItem) => ({
    id: item._id,
    name: item.name,
    productType: item.productType,
    color: item.color || "#333",
    createAt: new Date(item.createAt).toISOString(),
  }));
  return dataFormatting;
});

export const duplicateDraft = createAsyncThunk<
  IDraftCard,
  string,
  { state: RootState }
>("duplicate-draft", async (draftId: string) => {
  const data = await duplicateDraftApi(draftId);
  const dataFormatting: IDraftCard = {
    id: data._id,
    name: data.name,
    productType: data.productType,
    createAt: new Date(data.createAt).toISOString(),
    color: data.color || "#333",
  };
  return dataFormatting;
});

export const deleteDraft = createAsyncThunk<
  string,
  string,
  { state: RootState }
>("delete-draft", async (draftId: string) => {
  const data: string = await deleteDraftApi(draftId);
  return data;
});

const draftsSlice = createSlice({
  name: "drafts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getDraftsList.fulfilled,
      (state: IDraftState, { payload }: PayloadAction<IDraftCard[]>) => {
        state.list = [...payload];
      }
    );
    builder.addCase(
      duplicateDraft.fulfilled,
      (state: IDraftState, { payload }: PayloadAction<IDraftCard>) => {
        state.list = [...state.list, { ...payload }];
      }
    );
    builder.addCase(
      deleteDraft.fulfilled,
      (state: IDraftState, { payload }: PayloadAction<string>) => {
        state.list = state.list.filter((item) => item.id !== payload);
      }
    );
  },
});

export default draftsSlice.reducer;
