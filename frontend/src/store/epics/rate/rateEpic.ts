import { combineEpics } from 'redux-observable';
import {fetchRateEpic} from "@/store/epics/rate/fetchRateEpic";

export const rateEpic = combineEpics(fetchRateEpic);
