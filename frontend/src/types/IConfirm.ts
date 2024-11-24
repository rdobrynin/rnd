import { IOrganisation } from '@/types/IOrganisation';
import { RoleEnum } from '@/types/default';
import { IError } from '@/types/IError';

export interface IConfirm extends ApiResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  token: string;
  email: string;
  countryId: string;
  fullName: string;
  role: RoleEnum;
  isNewUser: boolean;
  organisation: IOrganisation;
  authToken: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IConfirmState {
  readonly loading: boolean;
  data: IConfirm | null;
  errors?: IError;
}

export enum IConfirmActionTypes {
  FETCH_REQUEST = '@@confirm/FETCH_REQUEST',
  FETCH_SUCCESS = '@@confirm/FETCH_SUCCESS',
  FETCH_ERROR = '@@confirm/FETCH_ERROR',
}
