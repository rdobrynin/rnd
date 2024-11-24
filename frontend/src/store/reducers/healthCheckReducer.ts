import { Reducer } from 'redux';

import { IError } from '@/types/IError';
import { IHealthCheck, IHealthCheckActionTypes, IHealthCheckState } from '@/types/IHealthCheck';

export const initialState: IHealthCheckState = {
  data: null,
  errors: undefined,
  loading: true,
};

const healthCheckReducer: Reducer<IHealthCheckState> = (state = initialState, action) => {
  switch (action.type) {
    case IHealthCheckActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case IHealthCheckActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload as IHealthCheck };
    }
    case IHealthCheckActionTypes.FETCH_ERROR: {
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

export { healthCheckReducer };
