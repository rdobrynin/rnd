import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap, filter, catchError } from 'rxjs/operators';
import { isActionOf, ActionType } from 'typesafe-actions';

import { IApplicationState } from '@/store';
import { errorHandler } from '@/helpers/errorHandler';
import {fetchRate} from "@/api/rate";
import {fetchRateAction} from "@/store/actions/rateActions";

type RootActions = ActionType<typeof fetchRateAction>;

export const fetchRateEpic: Epic<RootActions, RootActions, IApplicationState> = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchRateAction.request)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-empty-pattern
    mergeMap(({payload}: ReturnType<any>) =>
        fetchRate(payload.to, payload.from).pipe(
        map(({ data }) => fetchRateAction.success(data)),
        catchError((error) => {
          errorHandler(error);
          return of(fetchRateAction.failure(error.response));
        }),
      ),
    ),
  );
