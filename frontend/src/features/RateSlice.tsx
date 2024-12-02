import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIService } from '../utils/ApiService.tsx';
import { url } from '../utils/endpoints.ts';

const initialState: RateState = {
  loading: false,
  from: 'TON',
  to: 'USDT',
  price: '',
};

export interface RateState {
  loading: boolean;
  from: string;
  to: string;
  price: string;
}

export interface IPayloadRate {
  from: string;
  to: string;
}

export const rateSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRate.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRate.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.from = payload.from;
        state.to = payload.to;
        state.price = payload.price;
      })
      .addCase(getRate.rejected, (state) => {
        state.loading = false;
      });
  },
});
export const getRate = createAsyncThunk(
  'getRate',
  async (payload: IPayloadRate) => {
    try {
      const { data } = await APIService.get(
        `${url.rates}?from=${payload.from}&to=${payload.to}`
      );
      console.log(4444);
      return data;
    } catch (error: any) {
      console.error(error.response ? error : error);
    }
  }
);

export const rateSelector = (state: any) => state.rate;

export const { clearState } = rateSlice.actions;
export default rateSlice.reducer;
