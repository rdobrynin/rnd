import { IError } from '@/types/IError';

export interface IRate extends ApiResponse {
  from: string;
  to: string;
  price: number;
  updated: Date;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IRateState {
  loading: boolean;
  data: IRate;
  readonly errors?: IError;
}

export enum IRateActionTypes {
  FETCH_REQUEST = '@@rate/FETCH_REQUEST',
  FETCH_SUCCESS = '@@rate/FETCH_SUCCESS',
  FETCH_ERROR = '@@rate/FETCH_ERROR',
}
