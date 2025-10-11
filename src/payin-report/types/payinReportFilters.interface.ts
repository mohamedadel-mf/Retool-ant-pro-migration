export interface PayinReportFilters {
  dueDate?: Date;
  paymentStatuses?: string[];
  totalDueRanges?: string;
  contractStatuses?: string[];
  userTypes?: string[];
  organizationNames?: string[];
  positions?: number;
}
