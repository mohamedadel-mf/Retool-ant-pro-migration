import dayjs from 'dayjs';
import { ApiResource } from '@/api/enums/apiResources';
import { ApiEndpoints } from '../../api/endpoints/apiEndpoints';
import type { FilterConfig } from '../../shared/components/FilterDrawer/FilterConfig.interface';
import type { Organization } from '../types/organizations.interface';
import {
  CONTRACT_STATUS_OPTIONS,
  PAYMENT_STATUS_OPTIONS,
  TOTAL_DUE_RANGE_OPTIONS,
  USER_TYPE_OPTIONS,
} from '../types/payinReportFilterOptions';
import type { PayinReportFilters } from '../types/payinReportFilters.interface';

export const payinReportFilterConfig: FilterConfig<PayinReportFilters>[] = [
  {
    name: 'dueDate',
    label: 'Due Date',
    type: 'date',
    required: true,
    rules: [
      {
        required: true,
        message: 'Due date is required',
      },
    ],
    defaultValue: dayjs(),
  },
  {
    name: 'paymentStatuses',
    label: 'Payment Status',
    type: 'multi-select',
    options: PAYMENT_STATUS_OPTIONS,
    placeholder: 'Select Payment Status',
    required: true,
    disabled: false,
    rules: [
      {
        required: true,
        message: 'Please select at least one payment status',
      },
    ],
    defaultValue: ['not_paid'],
  },
  {
    name: 'totalDueRanges',
    label: 'Total Due Range',
    type: 'select',
    options: TOTAL_DUE_RANGE_OPTIONS,
    placeholder: 'Select Total Due Range',
    required: false,
    hidden: false,
    defaultValue: '1-4999',
  },
  {
    name: 'contractStatuses',
    label: 'Contract Status',
    type: 'checkbox-group',
    options: CONTRACT_STATUS_OPTIONS,
    required: true,
    rules: [
      {
        required: true,
        message: 'Please select at least one contract status',
      },
    ],
    defaultValue: ['pending'],
  },
  {
    name: 'userTypes',
    label: 'User Type',
    type: 'checkbox-group',
    options: USER_TYPE_OPTIONS,
    required: true,
    rules: [
      {
        required: true,
        message: 'Please select at least one user type',
      },
    ],
    disabled: false,
    defaultValue: ['individual'],
  },
  {
    name: 'organizationNames',
    label: 'Organization Name',
    type: 'multi-select',
    optionsFetch: {
      resource: ApiResource.MF_ADMIN,
      endpoint: ApiEndpoints.ORGANIZATIONS,
      transform: (data) => {
        const organizations = data as Organization[];
        return organizations.map((item) => ({
          value: item.id,
          label: item.code,
        }));
      },
    },
    placeholder: 'Select Organization',
    required: true,
    rules: [
      {
        required: true,
        message: 'Please select at least one organization',
      },
    ],
  },
  {
    name: 'positions',
    label: 'Positions',
    type: 'number',
    placeholder: 'Enter number of positions',
    required: false,
    disabled: false,
    rules: [
      {
        type: 'number' as const,
        min: 0,
        message: 'Positions must be a positive number',
      },
      {
        type: 'number' as const,
        max: 1000,
        message: 'Positions cannot exceed 1000',
      },
    ],
    defaultValue: 1,
  },
];
