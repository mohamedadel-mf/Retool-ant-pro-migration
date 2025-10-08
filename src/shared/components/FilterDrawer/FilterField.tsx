import { Checkbox, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import { useEffect, useState } from 'react';
import { apiFetch } from '@/api/apiFetch';
import { HttpMethod } from '../../../api/enums/httpMethods.enum';
import type { FilterConfig } from './FilterConfig.interface';

const { RangePicker } = DatePicker;

interface FilterFieldProps<T> {
  config: FilterConfig<T>;
}

export function FilterField<T>({ config }: FilterFieldProps<T>) {
  const [fetchedOptions, setFetchedOptions] = useState<
    { value: any; label: string }[]
  >([]);

  useEffect(() => {
    const fetchOptions = async () => {
      if (!config.optionsFetch) return;

      const data = await apiFetch({
        resource: config.optionsFetch.resource,
        endpoint: config.optionsFetch.endpoint,
        method: HttpMethod.GET,
      });

      const transformedOptions = config.optionsFetch.transform
        ? config.optionsFetch.transform(data)
        : data;

      setFetchedOptions(transformedOptions as any);
    };

    fetchOptions();
  }, [config.optionsFetch]);

  const finalOptions = config.options || fetchedOptions;

  const renderField = () => {
    switch (config.type) {
      case 'date-range':
        return <RangePicker style={{ width: '100%' }} />;

      case 'date':
        return <DatePicker style={{ width: '100%' }} />;

      case 'multi-select':
        return (
          <Select
            mode="multiple"
            placeholder={config.placeholder}
            options={finalOptions}
            style={{ width: '100%' }}
          />
        );

      case 'select':
        return (
          <Select
            placeholder={config.placeholder}
            options={finalOptions}
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
        return <Checkbox.Group options={finalOptions} />;

      default:
        return <Input placeholder={config.placeholder} />;
    }
  };

  return (
    <Form.Item
      label={config.label}
      name={config.name as string}
      required={config.required}
    >
      {renderField()}
    </Form.Item>
  );
}
