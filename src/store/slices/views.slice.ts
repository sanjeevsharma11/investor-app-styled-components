import { createSlice } from '@reduxjs/toolkit'
import { getViews, createView } from 'store/services/views.services'

const initialState = {
  views: 0,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

const viewsSlice = createSlice({
  name: 'views',
  initialState,
  reducers: {
    resetViews: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getViews.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })
    builder.addCase(getViews.fulfilled, (state, action) => {
      state.views = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(getViews.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(createView.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })
    builder.addCase(createView.fulfilled, (state, action) => {
      state.isSuccess = true
      state.isError = false
      state.message = ''
      state.isLoading = false
    })
    builder.addCase(createView.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })
  },
})

export const { resetViews } = viewsSlice.actions
export default viewsSlice.reducer
