import React, { FC, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthActionTypes } from '@/types/IAuth';
import { IHealthCheckActionTypes } from '@/types/IHealthCheck';
import { selectHealthCheckError } from '@/store/selectors/healthCheckSelectors';

export const Routes: FC = () => {
  const dispatch = useDispatch();
  const selectedHealthCheckError = useSelector(selectHealthCheckError);

  useEffect(() => {
    dispatch({
      type: IAuthActionTypes.FETCH_AUTH,
    });
    setTimeout(() => {
      dispatch({
        type: IHealthCheckActionTypes.FETCH_REQUEST,
      });
    }, 1000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <>
          <Switch>
            <Route exact={true} path='/' component={HomePage} />
          </Switch>
        </>
      </BrowserRouter>
    </>
  );
};
