import { useState } from 'react';
import { ApiEndpoints } from '../../api/endpoints/apiEndpoints';
import { ApiResource } from '../../api/enums/apiResources';
import { HttpMethod } from '../../api/enums/httpMethods.enum';
import { useApiMutation } from '../../api/useApi';
import {
  type Paging,
  paginationDetailsInitalState,
} from '../../shared/Pagination.interface';
import type { PayinReport } from '../types/payinReport.interface';
import type { PayinReportRequest } from '../types/payinReportRequest.interface';
import type { PayinReportResponse } from '../types/payinReportResponse.interface';

export function usePayinReport() {
  const [data, setData] = useState<PayinReport[]>([]);
  const [paginationDetails, setPaginationDetails] = useState<Paging>(
    paginationDetailsInitalState,
  );

  const mutation = useApiMutation<PayinReportResponse, PayinReportRequest>({
    resource: ApiResource.MF_ADMIN,
    endpoint: ApiEndpoints.PAYIN_REPORT,
    method: HttpMethod.POST,
  });

  const fetchPayinReport = async (body: PayinReportRequest) => {
    const response = await mutation.mutateAsync(body);
    setData(response.data);
    setPaginationDetails({ ...response.paging, totalItems: response.count });
  };

  return {
    data,
    paginationDetails,
    isLoading: mutation.isPending,
    fetchError: mutation.error,
    fetchPayinReport,
  };
}
