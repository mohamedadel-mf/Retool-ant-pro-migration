import { useEffect, useState } from 'react';
import { apiFetch } from '@/api/apiFetch';
import { HttpMethod } from '../../../api/enums/httpMethods.enum';
import { MFCheckbox, MFCheckboxGroup } from '../wrappers/MFCheckbox';
import { MFDatePicker } from '../wrappers/MFDatePicker';
import { MFFormItem } from '../wrappers/MFFormItem';
import { MFInput } from '../wrappers/MFInput';
import { MFInputNumber } from '../wrappers/MFInputNumber';
import { MFRadioGroup } from '../wrappers/MFRadioGroup';
import { MFRangePicker } from '../wrappers/MFRangePicker';
import { MFSelect } from '../wrappers/MFSelect';
import type { FilterConfig } from './FilterConfig.interface';

interface FilterFieldProps<T> {
  config: FilterConfig<T>;
}

export function FilterField<T>({ config }: FilterFieldProps<T>) {
  const [fetchedOptions, setFetchedOptions] = useState<
    { value: string | number; label: string }[]
  >([]);

  useEffect(() => {
    const fetchOptions = async (): Promise<void> => {
      if (!config.optionsFetch) return;

      const data = await apiFetch({
        resource: config.optionsFetch.resource,
        endpoint: config.optionsFetch.endpoint,
        method: HttpMethod.GET,
      });

      const transformedOptions = config.optionsFetch.transform
        ? config.optionsFetch.transform(data)
        : (data as { value: string | number; label: string }[]);

      setFetchedOptions(transformedOptions);
    };

    fetchOptions();
  }, [config.optionsFetch]);

  const finalOptions = config.options || fetchedOptions;

  if (config.hidden) {
    return null;
  }

  const renderField = () => {
    switch (config.type) {
      case 'date-range':
        return (
          <MFRangePicker style={{ width: '100%' }} disabled={config.disabled} />
        );

      case 'date':
        return (
          <MFDatePicker style={{ width: '100%' }} disabled={config.disabled} />
        );

      case 'multi-select':
        return (
          <MFSelect
            mode="multiple"
            placeholder={config.placeholder}
            options={finalOptions}
            style={{ width: '100%' }}
            disabled={config.disabled}
          />
        );

      case 'select':
        return (
          <MFSelect
            placeholder={config.placeholder}
            options={finalOptions}
            style={{ width: '100%' }}
            disabled={config.disabled}
          />
        );

      case 'text':
        return (
          <MFInput
            placeholder={config.placeholder}
            disabled={config.disabled}
          />
        );

      case 'number':
        return (
          <MFInputNumber
            style={{ width: '100%' }}
            placeholder={config.placeholder}
            disabled={config.disabled}
          />
        );

      case 'checkbox':
        return (
          <MFCheckbox disabled={config.disabled}>{config.label}</MFCheckbox>
        );

      case 'checkbox-group':
        return (
          <MFCheckboxGroup options={finalOptions} disabled={config.disabled} />
        );

      case 'radio':
        return (
          <MFRadioGroup options={finalOptions} disabled={config.disabled} />
        );

      default:
        return (
          <MFInput
            placeholder={config.placeholder}
            disabled={config.disabled}
          />
        );
    }
  };

  return (
    <MFFormItem
      label={config.label}
      name={config.name as string}
      required={config.required}
      rules={config.rules}
      initialValue={config.defaultValue}
    >
      {renderField()}
    </MFFormItem>
  );
}
