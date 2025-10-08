import { FilterOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import type { PayinReportRequest } from '@/payin-report/types/payinReportRequest.interface';
import { defaultPaginationConfig } from '../../config/paginationConfig';
import { payinReportFilterConfig } from '../payin-report/config/filterConfig';
import { payinReportColumns } from '../payin-report/config/tableConfig';
import { usePayinReport } from '../payin-report/hooks/usePayinReport';
import { usePayinReportState } from '../payin-report/hooks/usePayinReportState';
import type { PayinReport as PayinReportType } from '../payin-report/types/payinReport.interface';
import type { PayinReportFilters } from '../payin-report/types/payinReportFilters.interface';
import { FilterDrawer } from '../shared/components/FilterDrawer/FilterDrawer';

export default function PayinReport() {
  const { data, paginationDetails, isLoading, fetchError, fetchPayinReport } =
    usePayinReport();
  const {
    pagination,
    setPagination,
    filters,
    setFilters,
    drawerVisible,
    setDrawerVisible,
    resetFilters,
  } = usePayinReportState();

  useEffect(() => {
    const requestBody: PayinReportRequest = {
      pageSize: pagination.pageSize,
      pageNumber: pagination.current,
      ...(filters.paymentStatuses?.length && {
        paymentStatuses: filters.paymentStatuses,
      }),
      ...(filters.totalDueRanges?.length && {
        totalDueRanges: filters.totalDueRanges,
      }),
      ...(filters.contractStatuses?.length && {
        contractStatuses: filters.contractStatuses,
      }),
      ...(filters.userTypes?.length && { userTypes: filters.userTypes }),
      ...(filters.organizationNames?.length && {
        organizationNames: filters.organizationNames,
      }),
      ...(filters.positions && { positions: filters.positions }),
      ...(filters.dueDate && { dueDate: filters.dueDate }),
    };

    fetchPayinReport(requestBody);
  }, [pagination, filters]);

  const handleApplyFilters = (newFilters: PayinReportFilters) => {
    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, current: 1 }));
    setDrawerVisible(false);
  };

  const handleClearFilters = () => {
    resetFilters();
    setPagination((prev) => ({ ...prev, current: 1 }));
    setDrawerVisible(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (fetchError) return <div>Failed to load payin reports</div>;

  return (
    <>
      <ProTable<PayinReportType>
        columns={payinReportColumns}
        dataSource={data || []}
        rowKey="uuid"
        loading={isLoading}
        scroll={{ x: 1500, y: '60vh' }}
        toolbar={{
          title: 'Payin Reports',
          actions: [
            <Button
              key="filter"
              type="primary"
              icon={<FilterOutlined />}
              onClick={() => setDrawerVisible(true)}
            >
              Filters
              {Object.values(filters).some(
                (filter) =>
                  filter &&
                  (Array.isArray(filter)
                    ? filter.length > 0
                    : filter !== undefined),
              ) && ' •'}
            </Button>,
          ],
        }}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: paginationDetails.totalItems,
          showSizeChanger: true,
          pageSizeOptions: defaultPaginationConfig.pageSizeOptions,
          showTotal: (total, range) =>
            `Showing ${range[0]}-${range[1]} of ${total} records`,
          onChange: (page, pageSize) => {
            setPagination({
              current: page,
              pageSize: pageSize || pagination.pageSize,
            });
          },
        }}
        search={false}
        options={{
          density: true,
          fullScreen: true,
          reload: () => window.location.reload(),
          setting: true,
        }}
      />

      <FilterDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        filters={filters}
        filterConfig={payinReportFilterConfig}
        title="Payin Report Filters"
      />
    </>
  );
}
