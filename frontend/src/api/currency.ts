import { map } from 'rxjs/operators';

import { get$ } from '@/services/restApi';
import {ICurrency} from "@/types/ICurrency";

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchCurrency = () =>
  get$<{ data: ICurrency }>(`${baseUrl}/rate/crypto`).pipe(
    map((res) => {
      return res;
    }),
  );
