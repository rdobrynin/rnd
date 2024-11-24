export interface IStepDocument {
  headId: string;
  summary: string;
  suggestions: string[];
}

export interface IStepDocumentState {
  data: IStepDocument | undefined;
  errors?: string;
}

export enum IStepDocumentActionTypes {
  SET_STEP = '@@stepDocument/SET_STEP',
  GET_STEP = '@@stepDocument/GET_STEP',
  REMOVE_STEP = '@@stepDocument/REMOVE_STEP',
}
