import type { CheckboxOptionType, CheckboxProps } from 'antd';
import { Checkbox } from 'antd';

export interface MFCheckboxProps extends CheckboxProps {}

interface MFCheckboxGroupProps {
  options?: Array<CheckboxOptionType | string | number>;
  value?: Array<string | number | boolean>;
  defaultValue?: Array<string | number | boolean>;
  onChange?: (checkedValue: Array<string | number | boolean>) => void;
  disabled?: boolean;
  name?: string;
}

export function MFCheckbox(props: MFCheckboxProps) {
  return <Checkbox {...props} />;
}

export function MFCheckboxGroup(props: MFCheckboxGroupProps) {
  return <Checkbox.Group {...props} />;
}
