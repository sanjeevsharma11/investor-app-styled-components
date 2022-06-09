import { createSlice } from '@reduxjs/toolkit';
import { getFeed } from 'store/services/feed.service';
import { IFeed, IFeedDocument } from 'store/types/feed.types';

const initialState = {
  feeds: [] as IFeed[],
  feed: {} as IFeedDocument,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getFeed.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    });
    builder.addCase(getFeed.fulfilled, (state, action) => {
      state.feed = action.payload;
      state.isSuccess = true;
      state.isError = false;
      state.isLoading = false;
      state.message = '';
    });
    builder.addCase(getFeed.rejected, (state, action: any) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      state.isLoading = false;
    });
  },
});

export const { reset } = feedSlice.actions;
export default feedSlice.reducer;
