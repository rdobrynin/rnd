import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic } from 'redux-observable';

import { healthCheckEpic } from '@/store/epics/healthCheck/healthCheckEpic';
import {currencyEpic} from "@/store/epics/currency/currencyEpic";
import {rateEpic} from "@/store/epics/rate/rateEpic";

const baseEpics = new BehaviorSubject(
  combineEpics(
    healthCheckEpic,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    currencyEpic,
      rateEpic,
  ),
);

export const epics = (...args: Parameters<Epic>) =>
  baseEpics.pipe(mergeMap((epic: Epic) => epic(...args)));
