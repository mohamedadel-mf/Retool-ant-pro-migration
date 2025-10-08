import type { PayinReportFilters } from './payinReportFilters.interface';

export interface PayinReportRequest {
  page?: number;
  pageSize?: number;
  filters: PayinReportFilters;
}
