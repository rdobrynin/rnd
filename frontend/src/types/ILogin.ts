import { IOrganisation } from '@/types/IOrganisation';
import { IError } from '@/types/IError';
import { RoleEnum } from '@/types/default';

export interface ILogin extends ApiResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  token: string;
  email: string;
  countryId: string;
  fullName: string;
  picture: string;
  role: RoleEnum;
  isNewUser: boolean;
  organisation: IOrganisation;
  authToken: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface ILoginState {
  readonly loading: boolean;
  data: ILogin | null | undefined;
  readonly errors?: IError;
}

export enum ILoginActionTypes {
  FETCH_REQUEST = '@@login/FETCH_REQUEST',
  FETCH_SUCCESS = '@@login/FETCH_SUCCESS',
  FETCH_ERROR = '@@login/FETCH_ERROR',
}
