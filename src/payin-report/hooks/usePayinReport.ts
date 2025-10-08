import { useState } from 'react';
import { ApiResource } from '../../api/enums/apiResources';
import { HttpMethod } from '../../api/enums/httpMethods.enum';
import { useApiMutation } from '../../api/useApi';
import {
  type Paging,
  paginationDetailsInitalState,
} from '../../shared/Pagination.interface';
import type { PayinReport } from '../types/payinReport.interface';

interface PayinReportResponse {
  data: PayinReport[];
  paging: Paging;
  count: number;
}

export function usePayinReport() {
  const [data, setData] = useState<PayinReport[]>([]);
  const [paginationDetails, setPaginationDetails] = useState<Paging>(
    paginationDetailsInitalState,
  );

  const mutation = useApiMutation<PayinReportResponse, Record<string, any>>({
    resource: ApiResource.MF_ADMIN,
    endpoint: 'api/PayinReport',
    method: HttpMethod.POST,
  });

  const fetchPayinReport = async (body: Record<string, any>) => {
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
