export type ViewMode = 'Card' | 'List';
export enum DashboardToolsTypes {
  SET_VIEW_MODE = '@@dashboard/SET_VIEW_MODE',
}

export interface IDashboardToolsState {
  readonly viewMode: ViewMode;
}
