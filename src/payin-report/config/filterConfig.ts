// features/payin-report/config/filterConfig.ts
import type { FilterConfig } from '../../shared/components/FilterDrawer/FilterConfig.interface';

export interface PayinReportFilters {
  dueDateRange?: [string, string];
  paymentStatuses?: string[];
  totalDueRanges?: string[];
  contractStatuses?: string[];
  userTypes?: string[];
  organizationNames?: string[];
  positions?: number;
}

export const payinReportFilterConfig: FilterConfig<PayinReportFilters>[] = [
  {
    name: 'dueDateRange',
    label: 'Due Date',
    type: 'date-range',
  },
  {
    name: 'paymentStatuses',
    label: 'Payment Status',
    type: 'multi-select',
    options: [
      { value: 'not_paid', label: 'Not Paid' },
      { value: 'partially_paid', label: 'Partially Paid' },
      { value: 'paid', label: 'Paid' },
    ],
    placeholder: 'Select Payment Status',
  },
  {
    name: 'totalDueRanges',
    label: 'Total Due Range',
    type: 'select',
    options: [
      { value: '1-4999', label: '1-4,999' },
      { value: '5000-15000', label: '5K-15K' },
      { value: '15000-25000', label: '15K-25K' },
      { value: '25000-50000', label: '25K-50K' },
      { value: '50000+', label: '>50K' },
    ],
    placeholder: 'Select Total Due Range',
  },
  {
    name: 'contractStatuses',
    label: 'Contract Status',
    type: 'checkbox-group',
    options: [
      { value: 'pending', label: 'Pending' },
      { value: 'in_progress', label: 'In Progress' },
      { value: 'signed', label: 'Signed' },
    ],
  },
  {
    name: 'userTypes',
    label: 'User Type',
    type: 'checkbox-group',
    options: [
      { value: 'individual', label: 'Individual' },
      { value: 'self_pay_corporate', label: 'Self-pay Corporate' },
    ],
  },
  {
    name: 'organizationNames',
    label: 'Organization Name',
    type: 'multi-select',
    options: [
      { value: 'org1', label: 'Organization 1' },
      { value: 'org2', label: 'Organization 2' },
      { value: 'org3', label: 'Organization 3' },
      { value: 'org4', label: 'Organization 4' },
    ],
    placeholder: 'Select Organization',
  },
  {
    name: 'positions',
    label: 'Positions',
    type: 'number',
    placeholder: 'Enter number of positions',
  },
];
