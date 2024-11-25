import { map } from 'rxjs/operators';

import { get$ } from '@/services/restApi';
import {IRate} from "@/types/IRate";

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchRate = (from:string, to: string) =>
  get$<{ data: IRate }>(`${baseUrl}/rate/pairs?from=${from}&to=${to}`).pipe(
    map((res) => {
      return res;
    }),
  );
