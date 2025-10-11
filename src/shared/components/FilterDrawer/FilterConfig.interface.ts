import type { Rule } from 'antd/lib/form';
import type { ApiResource } from '../../../api/enums/apiResources';

export interface FilterConfig<T> {
  name: keyof T;
  label: string;
  type:
    | 'text'
    | 'number'
    | 'select'
    | 'multi-select'
    | 'date'
    | 'date-range'
    | 'checkbox'
    | 'checkbox-group'
    | 'radio';

  placeholder?: string;
  required?: boolean;
  options?: { value: string | number; label: string }[];
  optionsFetch?: {
    resource: ApiResource;
    endpoint: string;
    transform?: <D>(data: D) => { value: string | number; label: string }[];
  };

  disabled?: boolean;
  hidden?: boolean;
  rules?: Rule[];
  defaultValue?: unknown;
}
