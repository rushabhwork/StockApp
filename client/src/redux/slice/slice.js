import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const ctxSlice = createSlice({
  name: 'ctx',
  initialState,
  reducers: {
    registerCtx: ( state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // let Skey = action.payload.stockKey ;
      // let Svalue =  action.payload.stockValue
      // let obj = { Skey : Svalue}
      let obj ={...state}
      obj[action.payload.stockKey] =  action.payload.stockValue
      // let obj = { stockAnalysisData : action.payload.stockAnalysisData}
      return obj
      // state.action.payload.key = action.payload.val
    },
    updateCtx: ( state, action) => {
      state.value -= 1
    },
    delectCtx: (state, action) => {
      state.action.payload.key = action.payload.val
    },
  },
})

// Action creators are generated for each case reducer function
export const { registerCtx, updateCtx, delectCtx } = ctxSlice.actions

export default ctxSlice.reducer