import { useState } from 'react';
import { defaultPaginationConfig } from '../../../config/paginationConfig';
import type { PayinReportFilters } from '../types/payinReportFilters.interface';

const INITIAL_FILTERS: PayinReportFilters = {
  dueDate: undefined,
  paymentStatuses: [],
  totalDueRanges: [],
  contractStatuses: [],
  userTypes: [],
  organizationNames: [],
  positions: undefined,
};

export const usePayinReportState = () => {
  const [pagination, setPagination] = useState({
    current: defaultPaginationConfig.defaultPageNumber,
    pageSize: defaultPaginationConfig.defaultPageSize,
  });

  const [filters, setFilters] = useState<PayinReportFilters>(INITIAL_FILTERS);

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
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
