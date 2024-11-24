import { IError } from '@/types/IError';

export interface IHeadType extends ApiResponse {
  id: string;
  type: HeadTypeEnum;
  isActive: boolean;
}

export enum HeadTypeEnum {
  DOCUMENT = 'DOCUMENT',
  TALK = 'TALK',
  OPEN_CONVERSATION = 'OPEN_CONVERSATION',
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadTypeState {
  loading: boolean;
  data: IHeadType | null;
  readonly errors?: IError;
}

export enum IHeadTypeActionTypes {
  FETCH_REQUEST = '@@headType/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headType/FETCH_SUCCESS',
  FETCH_ERROR = '@@headType/FETCH_ERROR',
}
