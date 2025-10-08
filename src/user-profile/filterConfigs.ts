import type { FilterConfig } from '../shared/components/FilterDrawer/FilterConfig.interface';
import { csoStatusOptions } from './csoStatusOptions';

export interface UserProfileFilters {
  dateRange: [string, string];
  csoStatuses: number[];
}

export const userProfileFilterConfig: FilterConfig<UserProfileFilters>[] = [
  {
    name: 'dateRange',
    label: 'Sign Up Date',
    type: 'date-range',
  },
  {
    name: 'csoStatuses',
    label: 'CSO Status',
    type: 'multi-select',
    options: csoStatusOptions,
    placeholder: 'Select CSO Statuses',
  },
];
