import { IError } from '@/types/IError';

export interface IFile extends ApiResponse {
  headId: string;
  summary: string;
  suggestions: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IFileState {
  loading: boolean;
  data: IFile | null;
  readonly errors?: IError;
}

export enum IFileActionTypes {
  FETCH_REQUEST = '@@file/FETCH_REQUEST',
  FETCH_SUCCESS = '@@file/FETCH_SUCCESS',
  FETCH_ERROR = '@@file/FETCH_ERROR',
}
