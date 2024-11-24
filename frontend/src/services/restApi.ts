/* eslint-disable @typescript-eslint/no-explicit-any */
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import qs from 'qs';

import { removeEmptyParams } from '@/helpers/objectHelpers';
import { getCsrfToken } from '@/helpers/getCsrfToken';

const csrfToken = getCsrfToken();

const defaultHeaders = {
  'Content-type': 'application/json; charset=UTF-8',
  'X-CSRF-TOKEN': csrfToken,
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json',
};

const setQueryString = (params?: { [key: string]: any }) =>
  qs.stringify({
    ...(params ? removeEmptyParams(params) : undefined),
  });

export const get$ = <T = undefined>(url: string, params?: { [key: string]: any }) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'GET',
    headers: defaultHeaders,
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const getBearer$ = <T = undefined>(
  url: string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'GET',
    headers: { ...defaultHeaders, ...headers },
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const post$ = <T = undefined>(
  url: string,
  body?: { [key: string]: any } | string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'POST',
    headers: { ...defaultHeaders, ...headers },
    body,
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const put$ = <T = undefined>(
  url: string,
  body?: { [key: string]: any } | string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'PUT',
    headers: { ...defaultHeaders, ...headers },
    body,
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const putBearer$ = <T = undefined>(
  url: string,
  body?: { [key: string]: any } | string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'PUT',
    headers: { ...defaultHeaders, ...headers },
    body,
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const del$ = <T = undefined>(
  url: string,
  body?: { [key: string]: any },
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'DELETE',
    headers: { ...defaultHeaders, ...headers },
    body,
  }).pipe(map((data: AjaxResponse<any>): T => data.response));

export const delBearer$ = <T = undefined>(
  url: string,
  params?: { [key: string]: any },
  headers?: { [key: string]: any },
) =>
  ajax({
    url: `${url}?${setQueryString(params)}`,
    method: 'DELETE',
    headers: { ...defaultHeaders, ...headers },
  }).pipe(map((data: AjaxResponse<any>): T => data.response));
