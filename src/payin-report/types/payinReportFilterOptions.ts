export const PAYMENT_STATUS_OPTIONS = [
  { value: 'not_paid', label: 'Not Paid' },
  { value: 'partially_paid', label: 'Partially Paid' },
  { value: 'paid', label: 'Paid' },
];

export const TOTAL_DUE_RANGE_OPTIONS = [
  { value: '1-4999', label: '1-4,999' },
  { value: '5000-15000', label: '5K-15K' },
  { value: '15000-25000', label: '15K-25K' },
  { value: '25000-50000', label: '25K-50K' },
  { value: '50000+', label: '>50K' },
];

export const CONTRACT_STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'in_progress', label: 'In Progress' },
  { value: 'signed', label: 'Signed' },
];

export const USER_TYPE_OPTIONS = [
  { value: 'individual', label: 'Individual' },
  { value: 'self_pay_corporate', label: 'Self-pay Corporate' },
];
