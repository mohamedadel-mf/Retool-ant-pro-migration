export interface PayinReportRequest {
  pageNumber?: number;
  pageSize?: number;
  dueDate?: string;
  paymentStatuses?: string[];
  totalDueRanges?: string[];
  contractStatuses?: string[];
  userTypes?: string[];
  organizationNames?: string[];
  positions?: number;
}
