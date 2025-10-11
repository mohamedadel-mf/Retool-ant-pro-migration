import { FilterOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect } from 'react';
import { defaultPaginationConfig } from '../../config/paginationConfig';
import { payoutReportFilterConfig } from '../payout-report/config/filterConfig';
import { payoutReportColumns } from '../payout-report/config/tableConfig';
import { usePayoutReport } from '../payout-report/hooks/usePayoutReport';
import { usePayoutReportState } from '../payout-report/hooks/usePayoutReportState';
import type { PayoutReport as PayoutReportType } from '../payout-report/types/payoutReport.interface';
import type { PayoutReportFilters } from '../payout-report/types/payoutReportFilters.interface';
import type { PayoutReportRequest } from '../payout-report/types/payoutReportRequest.interface';
import { FilterDrawer } from '../shared/components/FilterDrawer/FilterDrawer';

export default function PayoutReport() {
  const { data, paginationDetails, isLoading, fetchError, fetchPayoutReport } =
    usePayoutReport();
  const {
    pagination,
    setPagination,
    filters,
    setFilters,
    drawerVisible,
    setDrawerVisible,
    resetFilters,
  } = usePayoutReportState();

  useEffect(() => {
    const requestBody: PayoutReportRequest = {
      pageSize: pagination.pageSize,
      pageNumber: pagination.current,
    };

    Object.entries(filters).forEach(([key, value]) => {
      if (value && (Array.isArray(value) ? value.length > 0 : true)) {
        requestBody[key as keyof PayoutReportRequest] = value;
      }
    });

    fetchPayoutReport(requestBody);
  }, [pagination, filters]);

  const handleApplyFilters = (newFilters: PayoutReportFilters) => {
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
  if (fetchError) return <div>Failed to load payout reports</div>;

  return (
    <>
      <ProTable<PayoutReportType>
        columns={payoutReportColumns}
        dataSource={data || []}
        rowKey="uuid"
        loading={isLoading}
        scroll={{ x: 'max-content', y: '60vh' }}
        toolbar={{
          title: 'Payout Reports',
          actions: [
            <Button
              key="filter"
              type="primary"
              icon={<FilterOutlined />}
              onClick={() => setDrawerVisible(true)}
            >
              Filters
            </Button>,
          ],
        }}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: paginationDetails.totalItems,
          showSizeChanger: true,
          pageSizeOptions: defaultPaginationConfig.pageSizeOptions,
          onChange: (page, pageSize) => {
            setPagination({
              current: page,
              pageSize: pageSize || pagination.pageSize,
            });
          },
        }}
        search={false}
      />

      <FilterDrawer
        open={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onApply={handleApplyFilters}
        onClear={handleClearFilters}
        filters={filters}
        filterConfig={payoutReportFilterConfig}
        title="Payout Report Filters"
      />
    </>
  );
}
