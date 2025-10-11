import type { SelectProps } from 'antd';
import { Select } from 'antd';

export interface MFSelectProps extends SelectProps {}

export function MFSelect(props: MFSelectProps) {
  return <Select {...props} />;
}
