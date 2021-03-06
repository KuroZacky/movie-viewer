import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './moviesSlice'

export const store = configureStore({
  reducer: {
    movies: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
