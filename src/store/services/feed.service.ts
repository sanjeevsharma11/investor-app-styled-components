import api from 'store/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFeed = createAsyncThunk(
  'feed/getFeed',
  async (
    {
      feedId,
    }: {
      feedId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data: feed } = await api.get(`/feeds/${feedId}`);
      return feed;
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue(message);
    }
  }
);
