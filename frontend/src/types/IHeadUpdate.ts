import { IError } from '@/types/IError';

export interface IHeadUpdate extends ApiResponse {
  id: string;
  updatedAt: string;
  name: string;
  publicId: string | null;
  fileUrl: string | null;
  alias: string;
  documentJsonDto: string | null;
  documentUrl: string | null;
  promptConfig: string | null;
  greetings: string | null;
  encodedPath: string;
  operationMode: string;
  ttsVoice: string;
  iconConfig: string | null;
  headVisualId: string;
  voiceflowApiKey: string | null;
  avatar: string;
  pluginOperationalModeConfig: string | null;
  orgPublicId: string | null;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IHeadUpdateState {
  readonly loading: boolean;
  data: IHeadUpdate | null;
  readonly errors?: IError;
}

export enum IHeadUpdateActionTypes {
  FETCH_REQUEST = '@@headUpdate/FETCH_REQUEST',
  FETCH_SUCCESS = '@@headUpdate/FETCH_SUCCESS',
  FETCH_ERROR = '@@headUpdate/FETCH_ERROR',
}
