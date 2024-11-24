import { IError } from '@/types/IError';

export interface IVerify extends ApiResponse {
  type: VerifyTypeEnum;
}

export enum VerifyTypeEnum {
  ENTER = 'ENTER',
  CONFIRM = 'CONFIRM',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IVerifyState {
  readonly loading: boolean;
  data: IVerify | null;
  readonly errors?: IError;
}

export enum IVerifyActionTypes {
  FETCH_REQUEST = '@@verify/FETCH_REQUEST',
  FETCH_SUCCESS = '@@verify/FETCH_SUCCESS',
  FETCH_ERROR = '@@verify/FETCH_ERROR',
}
