import { useState } from 'react';
import { defaultPaginationConfig } from '../../../config/paginationConfig';
import type { PayinReportFilters } from '../types/payinReportFilters.interface';

export const usePayinReportState = () => {
  const [pagination, setPagination] = useState({
    current: defaultPaginationConfig.defaultPageNumber,
    pageSize: defaultPaginationConfig.defaultPageSize,
  });

  const [filters, setFilters] = useState<PayinReportFilters>(
    {} as PayinReportFilters,
  );
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const resetFilters = () => {
    setFilters({} as PayinReportFilters);
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
