import type { ApiResource } from '../../../api/enums/apiResources';
export interface FilterConfig<T> {
  name: keyof T;
  label: string;
  type:
    | 'date-range'
    | 'multi-select'
    | 'text'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'checkbox-group';

  optionsFetch?: {
    resource: ApiResource;
    endpoint: string;
    transform?: (data: any) => { value: any; label: string }[];
  };
  options?: { value: any; label: string }[];
  placeholder?: string;
  fieldNames?: string[];
  required?: boolean;
}
