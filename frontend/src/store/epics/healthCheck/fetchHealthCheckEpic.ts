import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap, filter, catchError } from 'rxjs/operators';
import { isActionOf, ActionType } from 'typesafe-actions';

import { IApplicationState } from '@/store';
import { errorHandler } from '@/helpers/errorHandler';
import { fetchHealthCheckAction } from '@/store/actions/healthCheckActions';
import { fetchHealthCheck } from '@/api/healthCheck';

type RootActions = ActionType<typeof fetchHealthCheckAction>;

export const fetchHealthCheckEpic: Epic<RootActions, RootActions, IApplicationState> = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchHealthCheckAction.request)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-empty-pattern
    mergeMap(({}: ReturnType<any>) =>
      fetchHealthCheck().pipe(
        map(({ data }) => fetchHealthCheckAction.success(data)),
        catchError((error) => {
          errorHandler(error);
          return of(fetchHealthCheckAction.failure(error.response));
        }),
      ),
    ),
  );
