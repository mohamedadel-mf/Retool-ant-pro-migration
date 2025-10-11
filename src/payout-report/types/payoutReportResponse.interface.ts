import type { Paging } from '../../shared/Pagination.interface';
import type { PayoutReport } from './payoutReport.interface';

export interface PayoutReportResponse {
  data: PayoutReport[];
  paging: Paging;
  count: number;
}
