import { createAsyncAction } from 'typesafe-actions';
import {IRate, IRateActionTypes} from "@/types/IRate";

export const fetchRateAction = createAsyncAction(
    IRateActionTypes.FETCH_REQUEST,
    IRateActionTypes.FETCH_SUCCESS,
    IRateActionTypes.FETCH_ERROR,
)<undefined, IRate, string>();
