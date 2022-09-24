import ctxSlice from '../slice/slice'


import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    ctx: ctxSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
})
