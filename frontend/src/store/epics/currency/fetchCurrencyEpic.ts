import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { map, mergeMap, filter, catchError } from 'rxjs/operators';
import { isActionOf, ActionType } from 'typesafe-actions';

import { IApplicationState } from '@/store';
import { errorHandler } from '@/helpers/errorHandler';
import {fetchCurrency} from "@/api/currency";
import {fetchCurrencyAction} from "@/store/actions/currencyActions";

type RootActions = ActionType<typeof fetchCurrencyAction>;

export const fetchCurrencyEpic: Epic<RootActions, RootActions, IApplicationState> = (action$) =>
  action$.pipe(
    filter(isActionOf(fetchCurrencyAction.request)),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any,no-empty-pattern
    mergeMap(({}: ReturnType<any>) =>
      fetchCurrency().pipe(
        map(({ data }) => fetchCurrencyAction.success(data)),
        catchError((error) => {
          errorHandler(error);
          return of(fetchCurrencyAction.failure(error.response));
        }),
      ),
    ),
  );
