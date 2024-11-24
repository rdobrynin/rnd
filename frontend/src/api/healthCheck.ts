import { map } from 'rxjs/operators';

import { get$ } from '@/services/restApi';
import { IHealthCheck } from '@/types/IHealthCheck';

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchHealthCheck = () =>
  get$<{ data: IHealthCheck }>(`${baseUrl}/health`).pipe(
    map((res) => {
      return res;
    }),
  );
