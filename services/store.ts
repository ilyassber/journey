import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import journeyReducer from '@/features/journey/journeySlice';
import categoryReducer from '@/features/category/categorySlice';

export function makeStore() {
  return configureStore({
    reducer: {
      category: categoryReducer,
      journey: journeyReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store