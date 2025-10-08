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
  },
  {
    name: 'paymentStatuses',
    label: 'Payment Status',
    type: 'multi-select',
    options: PAYMENT_STATUS_OPTIONS,
    placeholder: 'Select Payment Status',
    required: true,
  },
  {
    name: 'totalDueRanges',
    label: 'Total Due Range',
    type: 'select',
    options: TOTAL_DUE_RANGE_OPTIONS,
    placeholder: 'Select Total Due Range',
    required: false,
  },
  {
    name: 'contractStatuses',
    label: 'Contract Status',
    type: 'checkbox-group',
    options: CONTRACT_STATUS_OPTIONS,
    required: true,
  },
  {
    name: 'userTypes',
    label: 'User Type',
    type: 'checkbox-group',
    options: USER_TYPE_OPTIONS,
    required: true,
  },
  {
    name: 'organizationNames',
    label: 'Organization Name',
    type: 'multi-select',
    optionsFetch: {
      resource: ApiResource.MF_ADMIN,
      endpoint: ApiEndpoints.ORGANIZATIONS,
      transform: (data: Organization[]) =>
        data.map((item: Organization) => ({
          value: item.id,
          label: item.code,
        })),
    },
    placeholder: 'Select Organization',
    required: true,
  },
  {
    name: 'positions',
    label: 'Positions',
    type: 'number',
    placeholder: 'Enter number of positions',
    required: false,
  },
];
