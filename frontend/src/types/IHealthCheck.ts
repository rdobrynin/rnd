import { IError } from '@/types/IError';

export interface IHealthCheck extends ApiResponse {
  status: HealthCheckStatusEnum;
}

export enum HealthCheckStatusEnum {
  OK = 'ok',
  ERROR = 'error',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHealthCheckState {
  loading: boolean;
  data: IHealthCheck | null;
  readonly errors?: IError;
}

export enum IHealthCheckActionTypes {
  FETCH_REQUEST = '@@healthCheck/FETCH_REQUEST',
  FETCH_SUCCESS = '@@healthCheck/FETCH_SUCCESS',
  FETCH_ERROR = '@@healthCheck/FETCH_ERROR',
}
