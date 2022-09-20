import ctxSlice from '../slice/slice'


import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    ctx: ctxSlice,
  },
})
