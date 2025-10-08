export interface PayinReportFilters {
  dueDateRange?: [string, string];
  paymentStatuses?: string[];
  totalDueRanges?: string[];
  contractStatuses?: string[];
  userTypes?: string[];
  organizationNames?: string[];
  positions?: number;
}
