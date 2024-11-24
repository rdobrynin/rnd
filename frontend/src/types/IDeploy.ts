import { IError } from '@/types/IError';

export interface IDeploy extends ApiResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  publicId: string;
  publicUrl: string;
  fileUrl: string | null;
  alias: string;
  documentJsonDto: string | null;
  documentUrl: string | null;
  promptConfig: string | null;
  greetings: string | null;
  language: string;
  languageSpeechRecognition: string;
  phrases: string[];
  encodedPath: string;
  ttsProvider: string;
  operationMode: string;
  ocProvider: string;
  ttsVoice: string;
  iconConfig: string | null;
  customWords: object | null;
  headVisualId: string;
  isActive: boolean;
  voiceflowApiKey: string | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IDeployState {
  readonly loading: boolean;
  data: IDeploy | null;
  readonly errors?: IError;
}

export enum IDeployActionTypes {
  FETCH_REQUEST = '@@deploy/FETCH_REQUEST',
  FETCH_SUCCESS = '@@deploy/FETCH_SUCCESS',
  FETCH_REMOVE = '@@deploy/FETCH_REMOVE',
  FETCH_ERROR = '@@deploy/FETCH_ERROR',
  CLEAR = '@@deploy/CLEAR',
}
