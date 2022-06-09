import api from 'store/api'
import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const googleLogin = createAsyncThunk(
  'user/googleLogin',
  async (data: { idToken: string; role: string }, { rejectWithValue }) => {
    try {
      const response = await api.post('/users/google-login', data)
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

export const facebookLogin = createAsyncThunk(
  'user/facebookLogin',
  async (
    data: { accessToken: string; userId: string; role: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post('/users/facebook-login', data)
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

export const truecallerLogin = createAsyncThunk(
  'user/truecallerLogin',
  async (
    data: {
      requestId: string
      accessToken: string
      endpoint: string
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.post('/users/truecaller-login', data)

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

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.delete('/users/logout')
      return
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

export const getMe = createAsyncThunk(
  'user/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/users/me')
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
