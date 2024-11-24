import { combineEpics } from 'redux-observable';
import { fetchHealthCheckEpic } from '@/store/epics/healthCheck/fetchHealthCheckEpic';

export const healthCheckEpic = combineEpics(fetchHealthCheckEpic);
