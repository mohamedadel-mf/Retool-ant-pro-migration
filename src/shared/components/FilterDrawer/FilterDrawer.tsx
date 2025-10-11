import { Button, Drawer, Form, notification } from 'antd';
import type { Store } from 'antd/es/form/interface';
import type { FilterConfig } from './FilterConfig.interface';
import { FilterField } from './FilterField';

interface FilterDrawerProps<TFilters> {
  open: boolean;
  onClose: () => void;
  onApply: (filters: TFilters) => void;
  onClear: () => void;
  filters: TFilters;
  filterConfig: FilterConfig<TFilters>[];
  title?: string;
}

export function FilterDrawer<TFilters extends Store>({
  open,
  onClose,
  onApply,
  onClear,
  filters,
  filterConfig,
  title = 'Filters',
}: FilterDrawerProps<TFilters>) {
  const [form] = Form.useForm();

  const handleApply = async () => {
    try {
      const values = await form.validateFields();
      onApply(values);
    } catch (error) {}
  };

  return (
    <Drawer
      title={title}
      open={open}
      onClose={onClose}
      footer={
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Button onClick={onClear}>Clear All</Button>
          <Button type="primary" onClick={handleApply}>
            Apply Filters
          </Button>
        </div>
      }
    >
      <Form form={form} layout="vertical">
        {filterConfig.map((config) => (
          <FilterField key={config.name as string} config={config} />
        ))}
      </Form>
    </Drawer>
  );
}
