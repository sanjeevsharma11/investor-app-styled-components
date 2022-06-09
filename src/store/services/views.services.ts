import api from 'store/api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const getViews = createAsyncThunk(
  'views/getViews',
  async (
    {
      refId,
      refType,
    }: {
      refId: string
      refType: string
    },
    { rejectWithValue }
  ) => {
    try {
      const { data: views } = await api.get(
        `/views?refId=${refId}&refType=${refType}`
      )
      return views
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

export const createView = createAsyncThunk(
  'views/createView',
  async (
    {
      refId,
      refType,
    }: {
      refId: string
      refType: string
    },
    { rejectWithValue }
  ) => {
    try {
      const { data: view } = await api.post(
        `/views?refId=${refId}&refType=${refType}`
      )
      return view
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
