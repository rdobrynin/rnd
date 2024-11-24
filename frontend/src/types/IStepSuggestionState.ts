export interface IStepSuggestion {
  suggestions: string[];
}

export interface IStepSuggestionState {
  data: IStepSuggestion | undefined;
  errors?: string;
}

export enum IStepSuggestionActionTypes {
  SET_STEP = '@@stepSuggestion/SET_STEP',
  GET_STEP = '@@stepSuggestion/GET_STEP',
  REMOVE_STEP = '@@stepSuggestion/REMOVE_STEP',
}
