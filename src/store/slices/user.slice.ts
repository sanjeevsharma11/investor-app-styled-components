import { createSlice } from '@reduxjs/toolkit'
import {
  facebookLogin,
  googleLogin,
  truecallerLogin,
  logoutUser,
  getMe,
} from 'store/services/user.service'
import { getCookie } from 'cookies-next'
import { IUser } from 'store/types/user.types'

const accessToken = getCookie('accessToken')

type IInitialStateType = {
  token: string | true | null
  user: IUser | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string
}

const initialState: IInitialStateType = {
  token: accessToken ? accessToken : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(googleLogin.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(googleLogin.fulfilled, (state, action) => {
      state.isSuccess = true
      state.token = action.payload
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(googleLogin.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(facebookLogin.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(facebookLogin.fulfilled, (state, action) => {
      state.token = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })

    builder.addCase(facebookLogin.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(truecallerLogin.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(truecallerLogin.fulfilled, (state, action) => {
      state.token = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })

    builder.addCase(truecallerLogin.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(logoutUser.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.isSuccess = true
      state.token = null
      state.isError = false
      state.isLoading = false
      state.message = ''
    })

    builder.addCase(logoutUser.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(getMe.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })

    builder.addCase(getMe.fulfilled, (state, action) => {
      state.user = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })

    builder.addCase(getMe.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })
  },
})

export const { reset } = userSlice.actions
export default userSlice.reducer
