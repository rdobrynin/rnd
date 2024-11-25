import { IApplicationState } from '@/store';
import { createSelector } from 'reselect';

export const selectRate= (state: IApplicationState) => state.rate;

export const selectRateLoading = createSelector(
    selectRate,
  (rate) => rate.loading,
);

export const selectRateError = createSelector(
    selectRate,
  (rate) => rate.errors,
);

export const selectRateData = createSelector(
    selectRate,
  (rate) => rate.data,
);
