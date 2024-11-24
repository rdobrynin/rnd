import { History } from 'history';

export interface IDefaultObjectType extends Object {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// eslint-disable-next-line @typescript-eslint/ban-types
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type LogoProps = {
  width: string;
  height: string;
};

export type svgIconProps = {
  width: number;
  height: number;
  fill: string;
};

export type CommonProps = {
  history: History;
  headId?: string;
};

export type HeadTagProps = {
  type: TagEnum;
  history?: History;
};

export enum TagEnum {
  SUGGESTION = 'SUGGESTION',
  TAG = 'TAG',
}
export enum RoleEnum {
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
  MODERATOR = 'MODERATOR',
}
export enum OperationModeEnum {
  VOICEFLOW = 'voiceflow',
  DOC_QA = 'doc_qa',
  OC = 'oc',
  TTT = 'ttt',
}

export enum HeadEventType {
  UPDATE_HEAD_TTT = 'UPDATE_HEAD_TTT',
  CREATE_HEAD_TTT = 'CREATE_HEAD_TTT',
  CREATE_HEAD_DOC_QA = 'CREATE_HEAD_DOC_QA',
  CREATE_HEAD_TALK = 'CREATE_HEAD_TALK',
  UPDATE_HEAD_DOC_QA = 'UPDATE_HEAD_DOC_QA',
}

export enum PageDocQaSectionPathsEnum {
  APPEARANCE = `/head/create/${OperationModeEnum.DOC_QA}/appearance`,
  FILE = `/head/create/${OperationModeEnum.DOC_QA}/document`,
  PERSONALITY = `/head/create/${OperationModeEnum.DOC_QA}/personality`,
  GUIDANCE = `/head/create/${OperationModeEnum.DOC_QA}/guidance`,
  HOSTING = `/head/create/${OperationModeEnum.DOC_QA}/hosting`,
  DEPLOY = `/head/create/${OperationModeEnum.DOC_QA}/deploy`,
}

export enum PageTalkSectionPathsEnum {
  APPEARANCE = `/head/create/${OperationModeEnum.TTT}/appearance`,
  GENERATE = `/head/create/${OperationModeEnum.TTT}/generate`,
}

export enum PageDocQaEditSectionPathsEnum {
  APPEARANCE = `/head/edit/${OperationModeEnum.DOC_QA}/appearance`,
  FILE = `/head/edit/${OperationModeEnum.DOC_QA}/document`,
  PERSONALITY = `/head/edit/${OperationModeEnum.DOC_QA}/personality`,
  GUIDANCE = `/head/edit/${OperationModeEnum.DOC_QA}/guidance`,
  HOSTING = `/head/edit/${OperationModeEnum.DOC_QA}/hosting`,
  DEPLOY = `/head/edit/${OperationModeEnum.DOC_QA}/deploy`,
}

export enum PageTalkEditSectionPathsEnum {
  APPEARANCE = `/head/edit/${OperationModeEnum.TTT}/appearance`,
  GENERATE = `/head/edit/${OperationModeEnum.TTT}/generate`,
}

export enum PageTalkViewSectionPathsEnum {
  APPEARANCE = `/head/view/${OperationModeEnum.TTT}/appearance`,
  GENERATE = `/head/view/${OperationModeEnum.TTT}/generate`,
}

export enum OsProviderEnum {
  PLAYGROUND = 'playground',
}

export enum TtsProviderEnum {
  AFLR = 'aflr',
  AUDIOSTACK = 'audiostack',
}

export type NavigatePaginationItemType = {
  link:
    | PageTalkSectionPathsEnum
    | PageDocQaSectionPathsEnum
    | PageDocQaEditSectionPathsEnum
    | PageTalkEditSectionPathsEnum
    | PageTalkViewSectionPathsEnum;
  translation: string;
};
