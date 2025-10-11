import { ApiResource } from '@/api/enums/apiResources';
import { ApiEndpoints } from '../../api/endpoints/apiEndpoints';
import type { Organization } from '../../payin-report/types/organizations.interface';
import type { FilterConfig } from '../../shared/components/FilterDrawer/FilterConfig.interface';
import type { PaymentMethod } from '../types/paymentMethod.interface';
import type { PayoutReportFilters } from '../types/payoutReportFilters.interface';

export const CASHOUT_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'processed', label: 'Processed' },
  { value: 'failed', label: 'Failed' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const CONTRACT_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'signed', label: 'Signed' },
];

export const PAYOUT_TYPE_OPTIONS = [
  { value: 'normal', label: 'Normal' },
  { value: 'early', label: 'Early' },
  { value: 'all', label: 'All' },
];

export const PAYOUT_AMOUNT_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: '<=500', label: '≤ 500' },
  { value: '>500', label: '> 500' },
];

export const USER_SEGMENT_OPTIONS = [
  { value: 0, label: 'All' },
  { value: 1, label: '1st Timer' },
  { value: 2, label: 'Old User' },
];

export const USER_TYPE_OPTIONS = [
  { value: 1, label: 'Individual' },
  { value: 2, label: 'Self-pay' },
  { value: 3, label: 'Salary deduction' },
];

export const PAYOUT_METHOD_OPTIONS = [
  { value: 1, label: 'Bank Transfer' },
  { value: 2, label: 'Credit Card' },
  { value: 3, label: 'PayPal' },
  { value: 4, label: 'Cash' },
];

export const payoutReportFilterConfig: FilterConfig<PayoutReportFilters>[] = [
  {
    name: 'dateTimeFrom',
    label: 'From Date',
    type: 'date',
    required: true,
    rules: [
      {
        required: true,
        message: 'From date is required',
      },
    ],
  },
  {
    name: 'dateTimeTo',
    label: 'To Date',
    type: 'date',
    required: true,
    rules: [
      {
        required: true,
        message: 'To date is required',
      },
    ],
  },
  {
    name: 'cashoutStatus',
    label: 'Cashout Status',
    type: 'select',
    options: CASHOUT_STATUS_OPTIONS,
    placeholder: 'Select Cashout Status',
    required: true,
    rules: [
      {
        required: true,
        message: 'Please select cashout status',
      },
    ],
  },
  {
    name: 'freeze',
    label: 'Freeze',
    type: 'checkbox',
    // Disabled logic will work once we have the actual API data
    // disabled: (filters) => filters.cashoutStatus?.includes('-1'),
  },
  {
    name: 'payoutMethod',
    label: 'Payout Method',
    type: 'select',
    options: PAYOUT_METHOD_OPTIONS, // Use static options for now
    placeholder: 'Select Payout Method',
    required: false,
    // optionsFetch: {
    //   resource: ApiResource.MF_ADMIN,
    //   endpoint: ApiEndpoints.PAYMENT_METHODS,
    //   transform: (data) => {
    //     const paymentMethods = data as PaymentMethod[];
    //     return paymentMethods.map((item) => ({
    //       value: item.id,
    //       label: item.name,
    //     }));
    //   },
    // },
  },
  {
    name: 'onlyMoreThan500',
    label: 'Payout Amount',
    type: 'radio',
    options: PAYOUT_AMOUNT_OPTIONS,
    defaultValue: 'all',
  },
  {
    name: 'contractStatuses',
    label: 'Contract Status',
    type: 'checkbox-group',
    options: CONTRACT_STATUS_OPTIONS,
    required: false,
  },
  {
    name: 'payoutType',
    label: 'Payout Type',
    type: 'radio',
    options: PAYOUT_TYPE_OPTIONS,
    defaultValue: 'all',
  },
  {
    name: 'userSegment',
    label: 'User Segment',
    type: 'radio',
    options: USER_SEGMENT_OPTIONS,
    defaultValue: 0,
  },
  {
    name: 'userTypes',
    label: 'User Type',
    type: 'checkbox-group',
    options: USER_TYPE_OPTIONS,
    required: false,
  },
  {
    name: 'organizationNames',
    label: 'Organization Name',
    type: 'multi-select',
    required: false,
    placeholder: 'Select one or more organization',
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
  },
];
