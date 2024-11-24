import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { ILayoutState } from '@/types/ILayout';
import { layoutReducer } from '@/store/reducers/layoutReducer';
import { healthCheckReducer } from '@/store/reducers/healthCheckReducer';
import { IHealthCheckState } from '@/types/IHealthCheck';

export interface IApplicationState {
  layout: ILayoutState;
  healthCheck: IHealthCheckState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer, healthCheck: healthCheckReducer,
    router: connectRouter(history),
  });
