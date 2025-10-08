export interface PayinReportFilters {
  dueDate?: string;
  paymentStatuses?: string[];
  totalDueRanges?: string[];
  contractStatuses?: string[];
  userTypes?: string[];
  organizationNames?: string[];
  positions?: number;
}
