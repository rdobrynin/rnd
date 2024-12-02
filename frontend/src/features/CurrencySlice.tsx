import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIService } from '../utils/ApiService.tsx';
import { url } from '../utils/endpoints.ts';

const initialState: CurrencyState = {
  loading: false,
  items: [],
};

export interface CurrencyState {
  loading: boolean;
  items: CurrencyItemState[];
}

export interface CurrencyItemState {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  symbol: string;
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrency.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCurrency.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getCurrency = createAsyncThunk('getCurrency', async () => {
  try {
    const { data } = await APIService.get(`${url.currency}`);
    return data;
  } catch (error: any) {
    console.error(error.response ? error : error);
  }
});

export const currencySelector = (state: any) => state.currency;

export const { clearState } = currencySlice.actions;
export default currencySlice.reducer;
