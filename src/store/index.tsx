import { configureStore } from '@reduxjs/toolkit'
import discoverReducer from '@/store/discover/index'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    discover: discoverReducer
  }
})

// 方法一
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// 方法二
// const storeTypes = store.getState()
// type StoreType = typeof storeTypes

export const useAppSelect: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export default store
