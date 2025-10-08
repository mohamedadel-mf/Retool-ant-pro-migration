import { Button, DatePicker, Drawer, Select } from 'antd';
import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';
import { csoStatusOptions } from './csoStatusOptions';
import type { UserProfileFiltersProps } from './UserProfileFiltersProps';

const { RangePicker } = DatePicker;

export default function UserProfileFilters({
  open,
  onClose,
  onApplyFilters,
  onClearFilters,
}: UserProfileFiltersProps) {
  const [dateRange, setDateRange] = useState<[Dayjs, Dayjs]>([
    dayjs().startOf('month'),
    dayjs().endOf('month'),
  ]);
  const [csoStatuses, setCsoStatuses] = useState<number[]>([]);

  const handleApply = () => {
    onApplyFilters({
      createdAtFrom: dateRange[0].format('YYYY-MM-DD'),
      createdAtTo: dateRange[1].format('YYYY-MM-DD'),
      csoStatuses: csoStatuses,
    });
  };

  const handleClear = () => {
    setDateRange([dayjs().startOf('month'), dayjs().endOf('month')]);
    setCsoStatuses([]);
    onClearFilters();
  };

  return (
    <Drawer
      title="User Profile Filters"
      placement="right"
      onClose={onClose}
      open={open}
      footer={
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button onClick={handleClear}>Clear Filters</Button>
          <Button type="primary" onClick={handleApply}>
            Apply Filters
          </Button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontWeight: 500, marginBottom: 8 }}>Sign Up</div>
          <RangePicker
            style={{ width: '100%' }}
            value={dateRange}
            onChange={(dates) => dates && setDateRange(dates as [Dayjs, Dayjs])}
          />
        </div>

        <div>
          <div style={{ fontWeight: 500, marginBottom: 8 }}>CSO Status</div>
          <Select
            mode="multiple"
            placeholder="Select CSO Statuses"
            style={{ width: '100%' }}
            value={csoStatuses}
            onChange={setCsoStatuses}
            options={csoStatusOptions}
          />
        </div>
      </div>
    </Drawer>
  );
}
