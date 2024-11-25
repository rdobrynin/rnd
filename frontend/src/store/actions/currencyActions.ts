import { createAsyncAction } from 'typesafe-actions';
import {ICurrency, ICurrencyActionTypes} from "@/types/ICurrency";

export const fetchCurrencyAction = createAsyncAction(
    ICurrencyActionTypes.FETCH_REQUEST,
    ICurrencyActionTypes.FETCH_SUCCESS,
    ICurrencyActionTypes.FETCH_ERROR,
)<undefined, ICurrency, string>();
