import { createSlice } from '@reduxjs/toolkit'
import {
  getUserReaction,
  addReaction,
  getAllReactions,
} from 'store/services/reaction.services'
import { IReactions, IUserReaction } from 'store/types/reaction.types'

type IInitialStateType = {
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  message: string
  userReaction: IUserReaction | null
  reactions: IReactions[]
}

const initialState: IInitialStateType = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  userReaction: null,
  reactions: [],
}

const reactionSlice = createSlice({
  name: 'reaction',
  initialState,
  reducers: {
    resetReaction: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserReaction.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })
    builder.addCase(getUserReaction.fulfilled, (state, action) => {
      state.userReaction = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(getUserReaction.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(addReaction.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })
    builder.addCase(addReaction.fulfilled, (state, action) => {
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(addReaction.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })

    builder.addCase(getAllReactions.pending, (state, action) => {
      state.isLoading = true
      state.isError = false
      state.isSuccess = false
      state.message = ''
    })
    builder.addCase(getAllReactions.fulfilled, (state, action) => {
      state.reactions = action.payload
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.message = ''
    })
    builder.addCase(getAllReactions.rejected, (state, action: any) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.isLoading = false
    })
  },
})

export const { resetReaction } = reactionSlice.actions
export default reactionSlice.reducer
