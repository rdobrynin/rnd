import { combineEpics } from 'redux-observable';
import {fetchCurrencyEpic} from "@/store/epics/currency/fetchCurrencyEpic";

export const currencyEpic = combineEpics(fetchCurrencyEpic);
