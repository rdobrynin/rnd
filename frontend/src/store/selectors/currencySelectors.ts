import { IApplicationState } from '@/store';
import { createSelector } from 'reselect';

export const selectCurrency= (state: IApplicationState) => state.currency;

export const selectCurrencyLoading = createSelector(
    selectCurrency,
  (currency) => currency.loading,
);

export const selectCurrencyError = createSelector(
    selectCurrency,
  (currency) => currency.errors,
);

export const selectCurrencyData = createSelector(
    selectCurrency,
  (currency) => currency.data,
);
