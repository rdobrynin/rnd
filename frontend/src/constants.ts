import {
  NavigatePaginationItemType,
  PageDocQaEditSectionPathsEnum,
  PageDocQaSectionPathsEnum,
  PageTalkEditSectionPathsEnum,
  PageTalkSectionPathsEnum,
  PageTalkViewSectionPathsEnum,
} from '@/types/default';

export const COOKIE_LIFETIME = 2147483647;
export const AUTH_STATE = 'AUTH_STATE';

export const DEPLOY_STATE = 'DEPLOY_STATE';
export const STEP_FACE = 'STEP_FACE';
export const STEP_DOCUMENT = 'STEP_DOCUMENT';

export const STEP_PHRASE = 'STEP_PHRASE';
export const STEP_SUGGESTION = 'STEP_SUGGESTION';
export const STEP_WELCOME_MESSAGE = 'STEP_WELCOME_MESSAGE';

export const ACCESS_HOME_PAGE = 'ACCESS_HOME_PAGE';
export const LONG_POLLING_DATA = 'LONG_POLLING_DATA';

export const NavigateHeadTextToTalkPaginationItems: NavigatePaginationItemType[] = [
  {
    link: PageTalkSectionPathsEnum.APPEARANCE,
    translation: 'page.navigation.appearance',
  },
  {
    link: PageTalkSectionPathsEnum.GENERATE,
    translation: 'page.navigation.generate',
  },
];

export const NavigateHeadTextToTalkEditPaginationItems: NavigatePaginationItemType[] = [
  {
    link: PageTalkEditSectionPathsEnum.APPEARANCE,
    translation: 'page.navigation.appearance',
  },
  {
    link: PageTalkEditSectionPathsEnum.GENERATE,
    translation: 'page.navigation.generate',
  },
];

export const NavigateHeadTextToTalkViewPaginationItems: NavigatePaginationItemType[] = [
  {
    link: PageTalkViewSectionPathsEnum.APPEARANCE,
    translation: 'page.navigation.appearance',
  },
  {
    link: PageTalkViewSectionPathsEnum.GENERATE,
    translation: 'page.navigation.generate',
  },
];

export const NavigateHeadDocQaEditPaginationItems: NavigatePaginationItemType[] = [
  {
    link: PageDocQaEditSectionPathsEnum.APPEARANCE,
    translation: 'page.navigation.appearance',
  },
  {
    link: PageDocQaEditSectionPathsEnum.FILE,
    translation: 'page.navigation.file',
  },
  {
    link: PageDocQaEditSectionPathsEnum.PERSONALITY,
    translation: 'page.navigation.personality',
  },
  {
    link: PageDocQaEditSectionPathsEnum.GUIDANCE,
    translation: 'page.navigation.guidance',
  },
  {
    link: PageDocQaEditSectionPathsEnum.HOSTING,
    translation: 'page.navigation.hosting',
  },
  {
    link: PageDocQaEditSectionPathsEnum.DEPLOY,
    translation: 'page.navigation.deploy',
  },
];

export const NavigateHeadDocQaPaginationItems: NavigatePaginationItemType[] = [
  {
    link: PageDocQaSectionPathsEnum.APPEARANCE,
    translation: 'page.navigation.appearance',
  },
  {
    link: PageDocQaSectionPathsEnum.FILE,
    translation: 'page.navigation.file',
  },
  {
    link: PageDocQaSectionPathsEnum.PERSONALITY,
    translation: 'page.navigation.personality',
  },
  {
    link: PageDocQaSectionPathsEnum.GUIDANCE,
    translation: 'page.navigation.guidance',
  },
  {
    link: PageDocQaSectionPathsEnum.HOSTING,
    translation: 'page.navigation.hosting',
  },
  {
    link: PageDocQaSectionPathsEnum.DEPLOY,
    translation: 'page.navigation.deploy',
  },
];
