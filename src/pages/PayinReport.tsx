import { FilterOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { defaultPaginationConfig } from '../../config/paginationConfig';
import { payinReportFilterConfig } from '../payin-report/config/filterConfig';
import { payinReportColumns } from '../payin-report/config/tableConfig';
import { usePayinReport } from '../payin-report/hooks/usePayinReport';
import type { PayinReport as PayinReportType } from '../payin-report/types/payinReport.interface';
import type { PayinReportFilters } from '../payin-report/types/payinReportFilters.interface';
import { FilterDrawer } from '../shared/components/FilterDrawer/FilterDrawer';

export default function PayinReport() {
  const { data, paginationDetails, isLoading, fetchError, fetchPayinReport } =
    usePayinReport();

  const [pagination, setPagination] = useState({
    current: defaultPaginationConfig.defaultPageNumber,
    pageSize: defaultPaginationConfig.defaultPageSize,
  });

  const [filters, setFilters] = useState<PayinReportFilters>({
    dueDateRange: undefined,
    paymentStatuses: [],
    totalDueRanges: [],
    contractStatuses: [],
    userTypes: [],
    organizationNames: [],
    positions: undefined,
  });

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  useEffect(() => {
    const requestBody: any = {
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
    };

    if (filters.dueDateRange) {
      const [startDate, endDate] = filters.dueDateRange;
      requestBody.dueDateFrom = startDate;
      requestBody.dueDateTo = endDate;
    }

    fetchPayinReport(requestBody);
  }, [pagination, filters]);

  const handleApplyFilters = (newFilters: PayinReportFilters) => {
    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, current: 1 }));
    setDrawerVisible(false);
  };

  const handleClearFilters = () => {
    setFilters({
      dueDateRange: undefined,
      paymentStatuses: [],
      totalDueRanges: [],
      contractStatuses: [],
      userTypes: [],
      organizationNames: [],
      positions: undefined,
    });
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
          showQuickJumper: true,
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
