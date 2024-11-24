import { IError } from '@/types/IError';
import { RoleEnum } from '@/types/default';
import { IOrganisation } from '@/types/IOrganisation';
import { IOAuth } from '@/types/IOAuth';

export interface IUser extends ApiResponse {
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

export interface IUserState {
  readonly loading: boolean;
  data: IOAuth | null;
  readonly errors?: IError;
}

export enum IUserActionTypes {
  FETCH_REQUEST = '@@user/FETCH_REQUEST',
  FETCH_SUCCESS = '@@user/FETCH_SUCCESS',
  FETCH_ERROR = '@@user/FETCH_ERROR',
}
