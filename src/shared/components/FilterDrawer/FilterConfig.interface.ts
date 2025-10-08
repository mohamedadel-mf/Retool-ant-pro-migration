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
  options?: { value: any; label: string }[];
  placeholder?: string;
  fieldNames?: string[];
}
