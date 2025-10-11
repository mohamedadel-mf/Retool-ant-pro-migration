import { useState } from 'react';
import { ApiEndpoints } from '../../api/endpoints/apiEndpoints';
import { ApiResource } from '../../api/enums/apiResources';
import { HttpMethod } from '../../api/enums/httpMethods.enum';
import { useApiMutation } from '../../api/useApi';
import {
  type Paging,
  paginationDetailsInitalState,
} from '../../shared/Pagination.interface';
import type { PayoutReport } from '../types/payoutReport.interface';
import type { PayoutReportRequest } from '../types/payoutReportRequest.interface';
import type { PayoutReportResponse } from '../types/payoutReportResponse.interface';

export function usePayoutReport() {
  const [data, setData] = useState<PayoutReport[]>([]);
  const [paginationDetails, setPaginationDetails] = useState<Paging>(
    paginationDetailsInitalState,
  );

  const mutation = useApiMutation<PayoutReportResponse, PayoutReportRequest>({
    resource: ApiResource.MF_ADMIN,
    endpoint: ApiEndpoints.PAYOUT_REPORT,
    method: HttpMethod.POST,
  });

  const fetchPayoutReport = async (body: PayoutReportRequest) => {
    const response = await mutation.mutateAsync(body);
    setData(response.data);
    setPaginationDetails({ ...response.paging, totalItems: response.count });
  };

  return {
    data,
    paginationDetails,
    isLoading: mutation.isPending,
    fetchError: mutation.error,
    fetchPayoutReport,
  };
}
