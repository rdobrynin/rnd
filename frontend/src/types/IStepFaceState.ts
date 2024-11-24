import { HeadVisualGenderEnum, HeadVisualTypeEnum } from '@/types/IHeadVisual';

export interface IStepFace {
  id: string;
  headVisualName: string;
  name: string;
  voice: string;
  video: string;
  posterImage: string;
  gender: HeadVisualGenderEnum;
  type: HeadVisualTypeEnum;
  avatar: string;
}

export interface IStepFaceState {
  data: IStepFace | undefined;
  errors?: string;
}

export enum IStepFaceActionTypes {
  SET_STEP = '@@stepFace/SET_STEP',
  GET_STEP = '@@stepFace/GET_STEP',
  REMOVE_STEP = '@@stepFace/REMOVE_STEP',
}
