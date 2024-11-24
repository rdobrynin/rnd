import { IError } from '@/types/IError';

export interface IHeads extends ApiResponse {
  data: IHead[] | null;
  meta: IMeta;
  active: number;
  inActive: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHead {
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

export interface IMeta {
  page: string;
  take: string;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface IHeadState {
  loading: boolean;
  data: IHeads | null;
  readonly errors?: IError;
}

export enum IHeadActionTypes {
  FETCH_REQUEST = '@@heads/FETCH_REQUEST',
  FETCH_SUCCESS = '@@heads/FETCH_SUCCESS',
  REMOVE_HEAD = '@@heads/REMOVE_HEAD',
  FETCH_ERROR = '@@heads/FETCH_ERROR',
}
