import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { ILayoutState } from '@/types/ILayout';
import { layoutReducer } from '@/store/reducers/layoutReducer';
import { healthCheckReducer } from '@/store/reducers/healthCheckReducer';
import { IHealthCheckState } from '@/types/IHealthCheck';
import {ICurrencyState} from "@/types/ICurrency";
import {currencyReducer} from "@/store/reducers/currencyReducer";
import {IRateState} from "@/types/IRate";
import {rateReducer} from "@/store/reducers/rateReducer";

export interface IApplicationState {
  layout: ILayoutState;
  healthCheck: IHealthCheckState;
  currency: ICurrencyState;
  rate: IRateState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    layout: layoutReducer, healthCheck: healthCheckReducer, currency: currencyReducer, rate: rateReducer,
    router: connectRouter(history),
  });
