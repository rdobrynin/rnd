export type ThemeColors = 'unith';

export enum LayoutActionTypes {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SET_THEME = '@@layout/SET_THEME',
}

export interface ILayoutState {
  readonly theme: ThemeColors;
}
