export interface IStepWelcomeMessage {
  message: string;
}

export interface IStepWelcomeMessageState {
  data: IStepWelcomeMessage | undefined;
  errors?: string;
}

export enum IStepWelcomeMessageActionTypes {
  SET_STEP = '@@stepWelcomeMessage/SET_STEP',
  GET_STEP = '@@stepWelcomeMessage/GET_STEP',
  REMOVE_STEP = '@@stepWelcomeMessage/REMOVE_STEP',
}
