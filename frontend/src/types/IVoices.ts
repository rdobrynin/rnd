import { IError } from '@/types/IError';

export type VoiceItem = {
  timePerformance: string;
  accent: string;
  language: string;
  alias: string;
  languageCode: string;
  voiceId: string;
  picture: string;
  gender: string;
  audioSample: string;
};
export type VoiceAccentItem = {
  accent: string;
  voices: VoiceItem[];
};
export type VoiceLanguageItem = {
  language: string;
  accents: VoiceAccentItem[];
};
export interface IVoice extends ApiResponse {
  languages: VoiceLanguageItem[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiResponse = Record<string, any>;

export interface IVoiceState {
  loading: true | boolean;
  data: IVoice | null;
  readonly errors?: IError;
}

export enum IVoicesActionTypes {
  FETCH_REQUEST = '@@voices/FETCH_REQUEST',
  FETCH_SUCCESS = '@@voices/FETCH_SUCCESS',
  FETCH_ERROR = '@@voices/FETCH_ERROR',
}
