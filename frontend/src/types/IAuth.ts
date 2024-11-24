import { IOrganisation } from '@/types/IOrganisation';
import { RoleEnum } from '@/types/default';

export interface IAuth extends ApiResponse {
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

export interface IAuthState {
  readonly loading: boolean;
  data: IAuth | undefined;
  errors?: string;
}

export enum IAuthActionTypes {
  FETCH_AUTH = '@@auth/FETCH_AUTH',
  FETCH_AUTH_SUCCESS = '@@auth/FETCH_AUTH_SUCCESS',
  FETCH_LOGOUT = '@@auth/FETCH_LOGOUT',
}
