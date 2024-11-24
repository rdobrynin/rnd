import { IError } from '@/types/IError';

export interface IHeadVisual extends ApiResponse {
  id: string;
  name: string;
  avatar: string;
  video: string;
  posterImage: string;
  gender: HeadVisualGenderEnum | null;
  type: HeadVisualTypeEnum;
  permissionType?: PermissionTypeEnum;
  isPremiumCandidate?: boolean;
}

export enum HeadVisualTypeEnum {
  CONVERSATION = 'CONVERSATION',
  TALK = 'TALK',
}

export enum PermissionTypeEnum {
  BASIC = 'BASIC',
  FULL = 'FULL',
  PRIVATE = 'PRIVATE',
}

export enum HeadVisualGenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadVisualState {
  loading: boolean;
  data: IHeadVisual | null;
  readonly errors?: IError;
}

export enum IHeadVisualActionTypes {
  FETCH_REQUEST = '@@headVisual/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headVisual/FETCH_SUCCESS',
  FETCH_ERROR = '@@headVisual/FETCH_ERROR',
}
