// shared/components/FilterDrawer/FilterField.tsx
import { Checkbox, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import type { FilterConfig } from './FilterConfig.interface';

const { RangePicker } = DatePicker;
const { Option } = Select;

interface FilterFieldProps<T> {
  config: FilterConfig<T>;
}

export function FilterField<T>({ config }: FilterFieldProps<T>) {
  const renderField = () => {
    switch (config.type) {
      case 'date-range':
        return <RangePicker style={{ width: '100%' }} />;

      case 'multi-select':
        return (
          <Select
            mode="multiple"
            placeholder={config.placeholder}
            options={config.options}
            style={{ width: '100%' }}
          />
        );

      case 'select':
        return (
          <Select
            placeholder={config.placeholder}
            options={config.options}
            style={{ width: '100%' }}
          />
        );

      case 'text':
        return <Input placeholder={config.placeholder} />;

      case 'number':
        return (
          <InputNumber
            style={{ width: '100%' }}
            placeholder={config.placeholder}
          />
        );

      case 'checkbox':
        return <Checkbox>{config.label}</Checkbox>;

      case 'checkbox-group':
        return <Checkbox.Group options={config.options} />;

      default:
        return <Input placeholder={config.placeholder} />;
    }
  };

  return (
    <Form.Item label={config.label} name={config.name as string}>
      {renderField()}
    </Form.Item>
  );
}
