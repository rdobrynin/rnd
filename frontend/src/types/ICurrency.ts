import { IError } from '@/types/IError';

export interface ICurrency extends ApiResponse {
  name: string;
  symbol: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface ICurrencyState {
  loading: boolean;
  data: ICurrency | null;
  readonly errors?: IError;
}

export enum ICurrencyActionTypes {
  FETCH_REQUEST = '@@currency/FETCH_REQUEST',
  FETCH_SUCCESS = '@@currency/FETCH_SUCCESS',
  FETCH_ERROR = '@@currency/FETCH_ERROR',
}
