export interface IStepPhrase {
  phrases: string[];
}

export interface IStepPhraseState {
  data: IStepPhrase | undefined;
  errors?: string;
}

export enum IStepPhraseActionTypes {
  SET_STEP = '@@stepPhrase/SET_STEP',
  GET_STEP = '@@stepPhrase/GET_STEP',
  REMOVE_STEP = '@@stepPhrase/REMOVE_STEP',
}
