export enum IHeadStatusActionTypes {
  SET_ACTIVE = '@@headStatus/SET_ACTIVE',
  SET_INACTIVE = '@@headStatus/SET_INACTIVE',
}

export interface IHeadStatusState {
  status: boolean;
}
