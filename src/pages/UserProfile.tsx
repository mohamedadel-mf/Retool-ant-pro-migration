// UserProfile.tsx

import { FilterOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useUserProfile } from '@/user-profile/getUsers';
import { defaultPaginationConfig } from '../../config/paginationConfig';
import { FilterDrawer } from '../shared/components/FilterDrawer/FilterDrawer';
import {
  type UserProfileFilters,
  userProfileFilterConfig,
} from '../user-profile/filterConfigs';
import type { User } from '../user-profile/User.interface';

const columns = [
  { title: 'UUID', dataIndex: 'uuid', key: 'uuid' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Birthdate', dataIndex: 'birthdate', key: 'birthdate' },
  { title: 'CSO Status', dataIndex: 'csoStatus', key: 'csoStatus' },
];

export default function UserProfile() {
  const { users, paginationDetails, isLoading, fetchError, fetchProfile } =
    useUserProfile();

  const [pagination, setPagination] = useState({
    current: defaultPaginationConfig.defaultPageNumber,
    pageSize: defaultPaginationConfig.defaultPageSize,
  });

  const [filters, setFilters] = useState<UserProfileFilters>({
    dateRange: ['', ''],
    csoStatuses: [],
  });

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  useEffect(() => {
    const requestBody: any = {
      pageSize: pagination.pageSize,
      pageNumber: pagination.current,
      ...(filters.csoStatuses?.length && { csoStatuses: filters.csoStatuses }),
    };
    if (filters.dateRange) {
      const [startDate, endDate] = filters.dateRange;
      requestBody.createdAtFrom = startDate;
      requestBody.createdAtTo = endDate;
    }

    fetchProfile(requestBody);
  }, [pagination, filters]);

  const handleApplyFilters = (newFilters: UserProfileFilters) => {
    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, current: 1 }));
    setDrawerVisible(false);
  };

  const handleClearFilters = () => {
    setFilters({ dateRange: ['', ''], csoStatuses: [] });
    setPagination((prev) => ({ ...prev, current: 1 }));
    setDrawerVisible(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (fetchError) return <div>Failed to load profiles</div>;

  return (
    <>
      <ProTable<User>
        columns={columns}
        dataSource={users}
        rowKey="uuid"
        loading={isLoading}
        scroll={{ y: '55vh' }}
        toolbar={{
          actions: [
            <Button
              key="filter"
              icon={<FilterOutlined />}
              onClick={() => setDrawerVisible(true)}
            >
              Filters{' '}
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
        filterConfig={userProfileFilterConfig}
        title="User Profile Filters"
      />
    </>
  );
}
