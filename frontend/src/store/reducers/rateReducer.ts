import { Reducer } from 'redux';

import { IError } from '@/types/IError';
import {IRate, IRateActionTypes, IRateState} from "@/types/IRate";

export const initialState: IRateState = {
  data: null,
  errors: undefined,
  loading: true,
};

const rateReducer: Reducer<IRateState> = (state = initialState, action) => {
  switch (action.type) {
    case IRateActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case IRateActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload as IRate };
    }
    case IRateActionTypes.FETCH_ERROR: {
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

export { rateReducer };
