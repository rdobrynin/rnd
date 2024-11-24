import { IOrganisation } from '@/types/IOrganisation';
import { IError } from '@/types/IError';
import { RoleEnum } from '@/types/default';

export interface IOAuth extends ApiResponse {
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

export interface IOAuthState {
  readonly loading: boolean;
  data: IOAuth | null | undefined;
  errors?: IError;
}

export enum IOAuthActionTypes {
  FETCH_REQUEST = '@@google/FETCH_REQUEST',
  FETCH_SUCCESS = '@@google/FETCH_SUCCESS',
  FETCH_ERROR = '@@google/FETCH_ERROR',
}
