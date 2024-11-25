import { Reducer } from 'redux';

import { IError } from '@/types/IError';
import {ICurrency, ICurrencyActionTypes, ICurrencyState} from "@/types/ICurrency";

export const initialState: ICurrencyState = {
  data: null,
  errors: undefined,
  loading: true,
};

const currencyReducer: Reducer<ICurrencyState> = (state = initialState, action) => {
  switch (action.type) {
    case ICurrencyActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case ICurrencyActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload as ICurrency };
    }
    case ICurrencyActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        errors: action.payload as IError | undefined,
      };
    }
    default: {
      return state;
    }
  }
};

export { currencyReducer };
