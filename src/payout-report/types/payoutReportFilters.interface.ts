export interface PayoutReportFilters {
  dateTimeFrom?: Date;
  dateTimeTo?: Date;
  cashoutStatus?: string;
  freeze?: boolean;
  payoutMethod?: string;
  onlyMoreThan500?: string;
  contractStatuses?: string[];
  payoutType?: string;
  userSegment?: number | null;
  userTypes?: number[];
  organizationNames?: number[];
}
