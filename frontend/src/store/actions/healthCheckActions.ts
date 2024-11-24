import { createAsyncAction } from 'typesafe-actions';
import { IHealthCheck, IHealthCheckActionTypes } from '@/types/IHealthCheck';

export const fetchHealthCheckAction = createAsyncAction(
  IHealthCheckActionTypes.FETCH_REQUEST,
  IHealthCheckActionTypes.FETCH_SUCCESS,
  IHealthCheckActionTypes.FETCH_ERROR,
)<undefined, IHealthCheck, string>();
