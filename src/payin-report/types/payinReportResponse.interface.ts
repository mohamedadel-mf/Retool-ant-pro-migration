import type { Paging } from '../../shared/Pagination.interface';
import type { PayinReport } from './payinReport.interface';

export interface PayinReportResponse {
  data: PayinReport[];
  paging: Paging;
  count: number;
}
