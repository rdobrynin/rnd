import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';

import { healthCheckEpic } from '@/store/epics/healthCheck/healthCheckEpic';

const baseEpics = new BehaviorSubject(
  combineEpics(
    healthCheckEpic,
  ),
);

export const epics = (...args: Parameters<Epic>) =>
  baseEpics.pipe(mergeMap((epic: Epic) => epic(...args)));
