import { IError } from '@/types/IError';

export interface IHeadPolling extends ApiResponse {
  id: string;
  isProcessed: boolean;
  fileUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadPollingState {
  loading: boolean;
  data: IHeadPolling | null;
  readonly errors?: IError;
  status: boolean;
}

export enum LongPollTypeEnum {
  HEAD = 'HEAD',
  TALK = 'TALK',
}

export enum IHeadPollingActionTypes {
  FETCH_REQUEST = '@@headPolling/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headPolling/FETCH_SUCCESS',
  FETCH_ERROR = '@@headPolling/FETCH_ERROR',
  SET_ACTIVE = '@@headPolling/SET_ACTIVE',
  SET_INACTIVE = '@@headPolling/SET_INACTIVE',
}
