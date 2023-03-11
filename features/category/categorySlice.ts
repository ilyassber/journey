import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, AppThunk } from '@/services/store';
import { Category } from '@/types.d';

const initialState: Category | null = null;

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
});

export const {} = categorySlice.actions;

export const category = (state: AppState) => state.category;

export default categorySlice.reducer;