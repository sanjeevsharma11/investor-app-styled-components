import api from 'store/api'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getUserReaction = createAsyncThunk(
  'user/getUserReaction',
  async (data: { refId: string; refType: string }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/reactions/user?refType=${data.refType}&refId=${data.refId}`
      )
      return response.data
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      toast.error(message)
      return rejectWithValue(message)
    }
  }
)

export const addReaction = createAsyncThunk(
  'user/addReaction',
  async (
    data: { refId: string; refType: string; reaction: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post('/reactions', data)
      return response.data
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      toast.error(message)
      return rejectWithValue(message)
    }
  }
)

export const getAllReactions = createAsyncThunk(
  'user/getAllReactions',
  async (data: { refId: string; refType: string }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/reactions?refType=${data.refType}&refId=${data.refId}`
      )
      return response.data
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      toast.error(message)
      return rejectWithValue(message)
    }
  }
)
