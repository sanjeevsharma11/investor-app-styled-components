import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import userReducer from './slices/user.slice'
import feedReducer from './slices/feed.slice'
import paymentReducer from './slices/payment.slice'
import viewReducer from './slices/views.slice'
import reactionReducer from './slices/reaction.slice'

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      feed: feedReducer,
      payment: paymentReducer,
      view: viewReducer,
      reaction: reactionReducer,
    },
  })

// types
type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store['dispatch']
export type RootState = ReturnType<Store['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NEXT_APP_ENV === 'development' ? true : false,
})
