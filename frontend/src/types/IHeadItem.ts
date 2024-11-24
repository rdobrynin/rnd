import { IError } from '@/types/IError';

export interface IHeadItem extends ApiResponse {
  id: string;
  name: string;
  publicId: string;
  publicUrl: string;
  greetings: string;
  language: string;
  languageSpeechRecognition: string;
  phrases: string[];
  ttsProvider: string;
  operationMode: string;
  ocProvider: string;
  ttsVoice: string;
  customWords: object;
  documentJsonDto: DocumentJsonDto;
  headVisualId: string;
  headVisualVideoUrl: string;
  posterVideoImage: string;
  isActive: boolean;
  avatar: string;
  orgPublicId: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadItemState {
  loading: boolean;
  data: IHeadItem | null;
  readonly errors?: IError;
}

export type DocumentJsonDto = {
  suggestions: string[];
  summary: string;
};

export type HeadItemProps = {
  head: IHeadItem;
};

export enum IHeadItemActionTypes {
  FETCH_REQUEST = '@@headItem/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headItem/FETCH_SUCCESS',
  FETCH_ERROR = '@@headItem/FETCH_ERROR',
  CLEAR_STATE = '@@headItem/CLEAR_STATE',
}
