import { useState } from 'react';
import { defaultPaginationConfig } from '../../../config/paginationConfig';
import type { PayoutReportFilters } from '../types/payoutReportFilters.interface';

export const usePayoutReportState = () => {
  const [pagination, setPagination] = useState({
    current: defaultPaginationConfig.defaultPageNumber,
    pageSize: defaultPaginationConfig.defaultPageSize,
  });

  const [filters, setFilters] = useState<PayoutReportFilters>(
    {} as PayoutReportFilters,
  );
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const resetFilters = () => {
    setFilters({} as PayoutReportFilters);
  };

  return {
    pagination,
    setPagination,
    filters,
    setFilters,
    drawerVisible,
    setDrawerVisible,
    resetFilters,
  };
};
