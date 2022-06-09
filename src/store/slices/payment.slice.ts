import { createSlice } from '@reduxjs/toolkit'
import { verifyPayment } from 'store/services/payment.service'

interface IVerifyPayment {
  order: any
  status: boolean
  expertInfo: {
    name: string
    amount: number
  }
}

const initialState = {
  payment: {} as IVerifyPayment,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(verifyPayment.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(verifyPayment.fulfilled, (state, action) => {
      state.payment = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(verifyPayment.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })
  },
})

export const { reset: resetPaymentState } = paymentSlice.actions
export default paymentSlice.reducer
