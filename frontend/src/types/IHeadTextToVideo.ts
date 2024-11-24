import { IError } from '@/types/IError';

export interface IHeadTextToVideo extends ApiResponse {
  id: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadTextToVideoState {
  readonly loading: boolean;
  data: IHeadTextToVideo | null;
  readonly errors?: IError;
}

export enum IHeadTextToVideoActionTypes {
  FETCH_REQUEST = '@@headTextToVideo/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headTextToVideo/FETCH_SUCCESS',
  FETCH_ERROR = '@@headTextToVideo/FETCH_ERROR',
}
