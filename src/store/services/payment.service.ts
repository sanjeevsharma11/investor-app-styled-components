import api from 'store/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const verifyPayment = createAsyncThunk(
  'payment/verifyPayment',
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
      const { data: payment } = await api.post('/payments/verify', {
        refId,
        refType,
      })
      return payment
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      return rejectWithValue(message)
    }
  }
)
