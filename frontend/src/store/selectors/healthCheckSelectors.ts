import { IApplicationState } from '@/store';
import { createSelector } from 'reselect';

export const selectHealthCheck = (state: IApplicationState) => state.healthCheck;

export const selectHealthCheckLoading = createSelector(
  selectHealthCheck,
  (healthCheck) => healthCheck.loading,
);

export const selectHealthCheckError = createSelector(
  selectHealthCheck,
  (healthCheck) => healthCheck.errors,
);

export const selectHealthCheckData = createSelector(
  selectHealthCheck,
  (healthCheck) => healthCheck.data,
);
