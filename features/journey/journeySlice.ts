import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, AppThunk } from '@/services/store';
import { Journey } from '@/types.d';

const initialState: Journey | null = null;

export const journeySlice = createSlice({
    name: 'journey',
    initialState,
    reducers: {},
});

export const {} = journeySlice.actions;

export const journey = (state: AppState) => state.journey;

export default journeySlice.reducer;