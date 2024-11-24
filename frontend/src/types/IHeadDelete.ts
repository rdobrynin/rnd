import { IError } from '@/types/IError';

export interface IHeadDelete extends ApiResponse {
  data: undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadDelete {
  id: string;
  name: string;
  alias: string;
  language: string;
  createdAt: string;
  isActive: boolean;
  greetings: string;
  avatar: string;
  publicUrl: string;
  operationMode: string;
  orgPublicId: string | null;
}

export interface IHeadDeleteState {
  loading: boolean;
  data: undefined | null | boolean;
  readonly errors?: IError;
}

export enum IHeadDeleteActionTypes {
  DELETE_REQUEST = '@@headDelete/DELETE_REQUEST',
  DELETE_SUCCESS = '@@headDelete/DELETE_SUCCESS',
  DELETE_ERROR = '@@headDelete/DELETE_ERROR',
}
